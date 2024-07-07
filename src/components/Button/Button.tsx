import React, { ButtonHTMLAttributes } from 'react';
import './Button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  icon?: React.ReactNode;
};

export function Button({ label, icon, ...props }: ButtonProps) {
  return (
    <button {...props} className="button">
      <span className="button-label">{label}</span>
      {icon && <span className="button-icon">{icon}</span>}
    </button>
  );
}
