import { useEffect } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalSectionProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  closeOnOverlayClick?: boolean;
  className?: string;
};

const ModalSection = ({
  isOpen,
  onClose,
  children,
  closeOnOverlayClick = true,
  className = "",
}: ModalSectionProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 animate-fadeIn"
      onClick={closeOnOverlayClick ? onClose : undefined}
    >
      <div
        className={`relative animate-scaleIn ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default ModalSection;