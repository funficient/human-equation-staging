import React from "react";
import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({
  variant,
  onClick,
  children,
  ariaLabel,
}) => {
  return (
    <button
      className={`hero-cta-button ${variant}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
