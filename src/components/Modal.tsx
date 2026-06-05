import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  accent?: "teal" | "orange";
  children: ReactNode;
}

export function Modal({ open, onClose, title, accent = "teal", children }: ModalProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 fade-up"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative z-10 panel ${accent === "teal" ? "glow-teal" : "glow-orange"} max-w-lg w-full max-h-[80vh] overflow-y-auto p-6`}
      >
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="text-sm text-foreground/90 space-y-4 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
