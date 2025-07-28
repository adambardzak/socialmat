"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import ExitIntentModal from './ExitIntentModal';
import { useExitIntent } from '@/hooks/useExitIntent';

interface ExitIntentProviderProps {
  children: React.ReactNode;
}

const ExitIntentProvider: React.FC<ExitIntentProviderProps> = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [hasShownModal, setHasShownModal] = useState(false);
  const pathname = usePathname();

  // Nespouštět na funnel stránce a e-book stránce
  const shouldShowExitIntent = !pathname.includes('/lead-magnet') && !pathname.includes('/ebook');

  console.log('ExitIntentProvider:', { pathname, shouldShowExitIntent, hasShownModal });

  const { hasTriggered, reset } = useExitIntent({
    threshold: 10,
    delay: 5000, // 5 sekund pro testování
    onExitIntent: () => {
      console.log('Exit intent callback triggered', { shouldShowExitIntent, hasShownModal });
      if (shouldShowExitIntent && !hasShownModal) {
        console.log('Showing exit intent modal');
        setShowModal(true);
        setHasShownModal(true);
      }
    }
  });

  // Reset při změně stránky
  useEffect(() => {
    console.log('Page changed, resetting exit intent');
    if (shouldShowExitIntent) {
      reset();
      setHasShownModal(false);
    }
  }, [pathname, shouldShowExitIntent, reset]);

  // Kontrola localStorage - nespouštět pro uživatele, kteří už jednou viděli modal
  useEffect(() => {
    const hasSeenExitIntent = localStorage.getItem('hasSeenExitIntent');
    console.log('Checking localStorage:', hasSeenExitIntent);
    
    // DOČASNĚ PRO TESTOVÁNÍ - odstraň localStorage
    // localStorage.removeItem('hasSeenExitIntent');
    
    if (hasSeenExitIntent) {
      setHasShownModal(true);
    }
  }, []);

  const handleCloseModal = () => {
    console.log('Closing exit intent modal');
    setShowModal(false);
    localStorage.setItem('hasSeenExitIntent', 'true');
  };

  const handleEbookClaim = () => {
    console.log('E-book claimed, redirecting to funnel');
    setShowModal(false);
    localStorage.setItem('hasSeenExitIntent', 'true');
    // Přesměrování na funnel
    window.location.href = '/lead-magnet';
  };

  return (
    <>
      {children}
      <ExitIntentModal 
        isOpen={showModal && shouldShowExitIntent} 
        onClose={handleCloseModal}
        onEbookClaim={handleEbookClaim}
      />
    </>
  );
};

export default ExitIntentProvider;
