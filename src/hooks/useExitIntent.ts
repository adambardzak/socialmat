"use client";

import { useState, useEffect, useCallback } from 'react';

interface UseExitIntentOptions {
  threshold?: number;
  delay?: number;
  onExitIntent?: () => void;
}

export const useExitIntent = (options: UseExitIntentOptions = {}) => {
  const { threshold = 10, delay = 3000, onExitIntent } = options;
  const [hasTriggered, setHasTriggered] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= threshold && !hasTriggered && isEnabled) {
      console.log('🚨 Exit intent triggered - mouse leave');
      setHasTriggered(true);
      onExitIntent?.();
    }
  }, [threshold, hasTriggered, onExitIntent, isEnabled]);

  const handleBeforeUnload = useCallback(() => {
    if (!hasTriggered && isEnabled) {
      console.log('🚨 Exit intent triggered - before unload');
      setHasTriggered(true);
      onExitIntent?.();
    }
  }, [hasTriggered, onExitIntent, isEnabled]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Ctrl+W (close tab) or Alt+F4 (close window)
    if (((e.ctrlKey || e.metaKey) && e.key === 'w') || (e.altKey && e.key === 'F4')) {
      if (!hasTriggered && isEnabled) {
        console.log('🚨 Exit intent triggered - keyboard shortcut');
        setHasTriggered(true);
        onExitIntent?.();
      }
    }
  }, [hasTriggered, onExitIntent, isEnabled]);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('✅ Exit intent enabled after delay');
      setIsEnabled(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isEnabled) return;

    console.log('🎯 Adding exit intent listeners');
    
    // Event listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('keydown', handleKeyDown);

    // Also add a test click outside to simulate exit intent
    const testButton = document.createElement('button');
    testButton.innerHTML = '🧪 Test Exit Intent';
    testButton.style.cssText = `
      position: fixed;
      top: 20px;
      left: 20px;
      z-index: 9999;
      background: #ef4444;
      color: white;
      padding: 8px 12px;
      border: none;
      border-radius: 6px;
      font-size: 12px;
      cursor: pointer;
    `;
    testButton.onclick = () => {
      if (!hasTriggered) {
        console.log('🧪 Test exit intent triggered manually');
        setHasTriggered(true);
        onExitIntent?.();
      }
    };
    document.body.appendChild(testButton);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('keydown', handleKeyDown);
      
      // Remove test button
      if (document.body.contains(testButton)) {
        document.body.removeChild(testButton);
      }
    };
  }, [isEnabled, handleMouseLeave, handleBeforeUnload, handleKeyDown]);

  const reset = useCallback(() => {
    console.log('🔄 Exit intent reset');
    setHasTriggered(false);
    setIsEnabled(false);
  }, []);

  return { hasTriggered, reset };
};
