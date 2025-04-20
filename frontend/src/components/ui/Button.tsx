/**
 * Button Component
 * 
 * A reusable UI component for buttons with consistent styling.
 * Supports primary and secondary button variants.
 */

import React from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button'
}) => {
  const baseClasses = 'font-medium py-2 px-4 rounded-arkivis transition-colors duration-150';
  
  const variantClasses = {
    primary: 'bg-arkivis-neonPurple hover:bg-arkivis-neonPurpleHover text-white',
    secondary: 'bg-white dark:bg-arkivis-darkPurple border border-arkivis-neonPurple text-arkivis-neonPurple hover:bg-arkivis-neonPurple hover:text-white'
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button; 