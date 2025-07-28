"use client";
import { useState } from "react";
import ExitIntentModal from "@/components/ExitIntentModal";
import { useExitIntent } from "@/hooks/useExitIntent";

const ExitIntentProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalOpen, setModalOpen] = useState(false);
  // Zobrazit modal pouze na homepage
  const isHomepage = typeof window !== "undefined" && window.location.pathname === "/";
  useExitIntent({
    onExitIntent: () => {
      if (isHomepage) setModalOpen(true);
    },
    delay: 2000,
    threshold: 10,
  });

  return (
    <>
      {children}
      {isHomepage && (
        <ExitIntentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
};

export default ExitIntentProvider;
