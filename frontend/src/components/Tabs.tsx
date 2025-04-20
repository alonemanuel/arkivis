/**
 * Tabs Component
 * 
 * Navigation tabs for switching between different views in the application.
 * Highlights the currently active tab with the accent color.
 */

import React from 'react';

type TabOption = 'notes' | 'friends' | 'profile';

interface TabsProps {
  activeTab: TabOption;
  onTabChange: (tab: TabOption) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="hidden sm:flex space-x-4">
      <button 
        onClick={() => onTabChange('notes')}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
          activeTab === 'notes' 
            ? 'bg-arkivis-neonPurple text-white' 
            : 'text-gray-600 dark:text-arkivis-mutedLight hover:text-arkivis-neonPurple dark:hover:text-arkivis-neonPurple'
        }`}
      >
        Notes
      </button>
      <button 
        onClick={() => onTabChange('friends')}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
          activeTab === 'friends' 
            ? 'bg-arkivis-neonPurple text-white' 
            : 'text-gray-600 dark:text-arkivis-mutedLight hover:text-arkivis-neonPurple dark:hover:text-arkivis-neonPurple'
        }`}
      >
        Friends
      </button>
      <button 
        onClick={() => onTabChange('profile')}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
          activeTab === 'profile' 
            ? 'bg-arkivis-neonPurple text-white' 
            : 'text-gray-600 dark:text-arkivis-mutedLight hover:text-arkivis-neonPurple dark:hover:text-arkivis-neonPurple'
        }`}
      >
        Profile
      </button>
    </div>
  );
};

export default Tabs; 