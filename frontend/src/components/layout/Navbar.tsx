/**
 * Navbar Component
 * 
 * Main navigation bar that appears at the top of all authenticated views.
 * Contains the app logo, navigation tabs, theme toggle, and user profile info.
 */

import React from 'react';
import { UserInfo } from '../../types/User';
import ThemeToggle from './ThemeToggle';
import Tabs from '../Tabs';

type TabOption = 'notes' | 'friends' | 'profile';

interface NavbarProps {
  user: UserInfo;
  darkMode: boolean;
  toggleDarkMode: () => void;
  activeTab: TabOption;
  onTabChange: (tab: TabOption) => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  user, 
  darkMode, 
  toggleDarkMode, 
  activeTab, 
  onTabChange 
}) => {
  return (
    <nav className="bg-white dark:bg-arkivis-darkPurple border-b border-gray-200 dark:border-[#3A1378]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-arkivis-neonPurple to-blue-500 bg-clip-text text-transparent">
                Arkivis
              </span>
            </div>
            {/* Only show tabs if user is logged in */}
            <div className="sm:ml-6">
              <Tabs activeTab={activeTab} onTabChange={onTabChange} />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            
            {/* User profile section */}
            <div className="flex items-center">
              {user.picture && (
                <img 
                  src={user.picture} 
                  alt={user.name} 
                  className="h-9 w-9 rounded-full border-2 border-arkivis-neonPurple"
                />
              )}
              <span className="hidden md:block ml-2 font-medium text-gray-700 dark:text-arkivis-lightText">
                {user.name.split(' ')[0]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 