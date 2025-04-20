import React, { useState, useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleAuth from './components/GoogleAuth';
import './App.css';

// Replace with your actual Google Client ID
const GOOGLE_CLIENT_ID = "506700005225-jb8a56jktk9c1bsf9sfgrvemlm9tsd9v.apps.googleusercontent.com"; // Get this from Google Cloud Console

interface UserInfo {
  name: string;
  email: string;
  picture?: string;
}

function App() {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [darkMode, setDarkMode] = useState(true);

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

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div className="min-h-screen bg-gray-100 dark:bg-black transition-colors duration-200">
        <header className="bg-white dark:bg-gray-900 shadow">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Arkivis</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
              {user && (
                <div className="flex items-center">
                  {user.picture && (
                    <img 
                      src={user.picture} 
                      alt={user.name} 
                      className="h-8 w-8 rounded-full mr-2"
                    />
                  )}
                  <span className="text-gray-700 dark:text-gray-200">Hello {user.name.split(' ')[0]}</span>
                </div>
              )}
            </div>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {!user ? (
            <div className="bg-white dark:bg-gray-900 p-8 rounded shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Welcome to Arkivis</h2>
              <p className="mb-6 text-gray-600 dark:text-gray-300">Please sign in with your Google account</p>
              <GoogleAuth onLogin={handleLogin} />
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-900 p-8 rounded shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Welcome, {user.name}</h2>
              <p className="text-gray-600 dark:text-gray-300">You are logged in with {user.email}</p>
            </div>
          )}
        </main>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App; 