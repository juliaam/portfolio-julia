import React, { ButtonHTMLAttributes } from 'react';
import './Button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  icon?: React.ReactNode;
  className?: string;
};

export function Button({ label, icon, className, ...props }: ButtonProps) {
  return (
    <button {...props} className={`button ${className}`}>
      <span className="button-label">{label}</span>
      {icon && <span className="button-icon">{icon}</span>}
    </button>
  );
}
