/**
 * App Component
 * 
 * The root component of the Arkivis application.
 * Manages high-level application state and routing between main views.
 */

import React, { useState, useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';

// Import types
import { UserInfo } from './types/User';

// Import pages
import Login from './pages/Login';
import Notes from './pages/Notes';
import Friends from './pages/Friends';
import Profile from './pages/Profile';

// Import layout components
import Navbar from './components/layout/Navbar';

// Google OAuth client ID
const GOOGLE_CLIENT_ID = "506700005225-jb8a56jktk9c1bsf9sfgrvemlm9tsd9v.apps.googleusercontent.com"; 

type TabOption = 'notes' | 'friends' | 'profile';

function App() {
  // Application state
  const [user, setUser] = useState<UserInfo | null>(null);
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState<TabOption>('notes');

  useEffect(() => {
    // Apply dark mode to the HTML element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleLogin = (userInfo: UserInfo) => {
    setUser(userInfo);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Render content based on authentication state and active tab
  const renderContent = () => {
    if (!user) {
      return <Login onLogin={handleLogin} />;
    }

    switch (activeTab) {
      case 'notes':
        return <Notes />;
      case 'friends':
        return <Friends />;
      case 'profile':
        return <Profile user={user} />;
      default:
        return <Notes />;
    }
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div className="min-h-screen">
        {/* Only render navbar if user is logged in */}
        {user && (
          <Navbar 
            user={user} 
            darkMode={darkMode} 
            toggleDarkMode={toggleDarkMode} 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
          />
        )}

        {/* Theme toggle for login screen */}
        {!user && (
          <div className="absolute top-4 right-4">
            <button
              onClick={toggleDarkMode}
              className="relative p-2 rounded-full bg-gray-100 dark:bg-[#3A1378] text-gray-600 dark:text-arkivis-mutedLight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-arkivis-neonPurple"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        )}

        {/* Main content area */}
        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {renderContent()}
        </main>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App; 