/**
 * Card Component
 * 
 * A reusable UI component for displaying content in a card-style container.
 * Provides consistent styling for cards throughout the application.
 */

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-[#2D0F61] rounded-arkivis shadow-arkivis dark:shadow-none border border-gray-100 dark:border-[#3A1378] ${className}`}>
      {children}
    </div>
  );
};

export default Card; 