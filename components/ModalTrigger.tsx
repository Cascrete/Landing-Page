"use client";

type ModalTriggerProps = {
  children: React.ReactNode;
  className?: string;
  mode?: "project" | "contact";
};

export default function ModalTrigger({ children, className, mode = "project" }: ModalTriggerProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent("open-contact-modal", { detail: { mode } }))}
    >
      {children}
    </button>
  );
}