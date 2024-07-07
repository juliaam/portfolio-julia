import React, { ButtonHTMLAttributes } from 'react';
import './SocialMediaButton.scss';

type SocialMediaButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ReactNode;
};

export function SocialMediaButton({ icon, ...props }: SocialMediaButtonProps) {
  return (
    <button {...props} className="socialMediaButton">
      {icon}
    </button>
  );
}
