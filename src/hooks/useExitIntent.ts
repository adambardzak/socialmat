"use client";

import { useState, useEffect, useCallback } from 'react';

interface UseExitIntentOptions {
  threshold?: number;
  delay?: number;
  onExitIntent?: () => void;
}

export const useExitIntent = (options: UseExitIntentOptions = {}) => {
  const { threshold = 10, delay = 10000, onExitIntent } = options; // Kratší delay pro testování
  const [hasTriggered, setHasTriggered] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    // Exit intent: myš opouští viewport směrem nahoru
    if (e.clientY <= threshold && !hasTriggered && isEnabled) {
      console.log('Exit intent triggered - mouse leave');
      setHasTriggered(true);
      onExitIntent?.();
    }
  }, [threshold, hasTriggered, onExitIntent, isEnabled]);

  const handleBeforeUnload = useCallback((e: BeforeUnloadEvent) => {
    // Detekce pokusu o zavření záložky/okna
    if (!hasTriggered && isEnabled) {
      console.log('Exit intent triggered - before unload');
      setHasTriggered(true);
      onExitIntent?.();
    }
  }, [hasTriggered, onExitIntent, isEnabled]);

  const handleVisibilityChange = useCallback(() => {
    // Detekce přepnutí na jinou záložku
    if (document.hidden && !hasTriggered && isEnabled) {
      console.log('Exit intent triggered - visibility change');
      setHasTriggered(true);
      onExitIntent?.();
    }
  }, [hasTriggered, onExitIntent, isEnabled]);

  useEffect(() => {
    // Povolit detekci po delayi
    const timer = setTimeout(() => {
      console.log('Exit intent enabled after delay');
      setIsEnabled(true);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  useEffect(() => {
    if (!isEnabled) return;

    // Event listenery pouze pro body element
    document.body.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isEnabled, handleMouseLeave, handleBeforeUnload, handleVisibilityChange]);

  const reset = useCallback(() => {
    console.log('Exit intent reset');
    setHasTriggered(false);
    setIsEnabled(false);
  }, []);

  // Debug info
  useEffect(() => {
    console.log('Exit intent state:', { hasTriggered, isEnabled });
  }, [hasTriggered, isEnabled]);

  return { hasTriggered, reset };
};
