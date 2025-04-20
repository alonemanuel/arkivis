/**
 * Navbar Component
 * 
 * Main navigation bar that appears at the top of all authenticated views.
 * Contains the app logo, navigation tabs, theme toggle, and user profile info.
 */

import React, { useState, useRef, useEffect } from 'react';
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
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  user, 
  darkMode, 
  toggleDarkMode, 
  activeTab, 
  onTabChange,
  onLogout
}) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
            <div className="relative" ref={menuRef}>
              <div 
                className="flex items-center cursor-pointer"
                onClick={() => setShowProfileMenu(!showProfileMenu)}
              >
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
                <svg 
                  className="ml-1 h-5 w-5 text-gray-400" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor" 
                  aria-hidden="true"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </div>
              
              {/* Profile dropdown menu */}
              {showProfileMenu && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-arkivis-darkPurple ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                  <div className="px-4 py-2 text-sm text-gray-700 dark:text-white border-b border-gray-200 dark:border-[#3A1378]">
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-500 dark:text-arkivis-mutedLight truncate">{user.email}</p>
                  </div>
                  <button
                    onClick={onLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-[#3A1378]"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 