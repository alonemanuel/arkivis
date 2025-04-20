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
  const [activeTab, setActiveTab] = useState('notes');

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
      <div className="min-h-screen">
        {/* Navbar */}
        <nav className="bg-white dark:bg-arkivis-darkPurple border-b border-gray-200 dark:border-[#3A1378]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center">
                  <span className="text-2xl font-bold bg-gradient-to-r from-arkivis-neonPurple to-blue-500 bg-clip-text text-transparent">
                    Arkivis
                  </span>
                </div>
                {user && (
                  <div className="hidden sm:ml-6 sm:flex space-x-4">
                    <button 
                      onClick={() => setActiveTab('notes')}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                        activeTab === 'notes' 
                          ? 'bg-arkivis-neonPurple text-white' 
                          : 'text-gray-600 dark:text-arkivis-mutedLight hover:text-arkivis-neonPurple dark:hover:text-arkivis-neonPurple'
                      }`}
                    >
                      Notes
                    </button>
                    <button 
                      onClick={() => setActiveTab('friends')}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                        activeTab === 'friends' 
                          ? 'bg-arkivis-neonPurple text-white' 
                          : 'text-gray-600 dark:text-arkivis-mutedLight hover:text-arkivis-neonPurple dark:hover:text-arkivis-neonPurple'
                      }`}
                    >
                      Friends
                    </button>
                    <button 
                      onClick={() => setActiveTab('profile')}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                        activeTab === 'profile' 
                          ? 'bg-arkivis-neonPurple text-white' 
                          : 'text-gray-600 dark:text-arkivis-mutedLight hover:text-arkivis-neonPurple dark:hover:text-arkivis-neonPurple'
                      }`}
                    >
                      Profile
                    </button>
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-4">
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
                
                {user && (
                  <div className="flex items-center">
                    {user.picture && (
                      <img 
                        src={user.picture} 
                        alt={user.name} 
                        className="h-9 w-9 rounded-full border-2 border-arkivis-neonPurple"
                      />
                    )}
                    <span className="hidden md:block ml-2 font-medium">
                      {user.name.split(' ')[0]}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {!user ? (
            <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
              <div className="card p-8 max-w-md w-full">
                <div className="mb-6 text-center">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Welcome to Arkivis
                  </h2>
                  <div className="h-1 w-24 mx-auto bg-gradient-to-r from-arkivis-neonPurple to-blue-500 mb-4"></div>
                  <p className="text-arkivis-mutedDark dark:text-arkivis-mutedLight text-lg">
                    Your modern note-taking app
                  </p>
                </div>
                <div className="mb-8">
                  <p className="text-arkivis-mutedDark dark:text-arkivis-mutedLight mb-4 text-center">
                    Sign in to continue
                  </p>
                  <div className="flex justify-center">
                    <div className="p-0.5 rounded-arkivis bg-gradient-to-r from-arkivis-neonPurple to-blue-500">
                      <div className="bg-white dark:bg-arkivis-darkPurple p-1 rounded-[10px]">
                        <GoogleAuth onLogin={handleLogin} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 dark:border-[#3A1378] pt-4 mt-6">
                  <p className="text-xs text-center text-arkivis-mutedDark dark:text-arkivis-mutedLight">
                    By signing in, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {activeTab === 'notes' && (
                <div>
                  <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Your Notes</h1>
                    <p className="text-arkivis-mutedDark dark:text-arkivis-mutedLight">
                      Create, edit and organize your thoughts
                    </p>
                  </div>
                  
                  {/* Note creation button */}
                  <div className="mb-6">
                    <button className="btn-primary flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      New Note
                    </button>
                  </div>

                  {/* Note cards grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Empty state */}
                    <div className="card p-6 col-span-full flex flex-col items-center justify-center text-center h-48">
                      <p className="text-arkivis-mutedDark dark:text-arkivis-mutedLight mb-4">
                        You don't have any notes yet. Create your first note to get started.
                      </p>
                      <button className="btn-secondary">Create Note</button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'friends' && (
                <div className="card p-6 flex flex-col items-center justify-center text-center h-64">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Friends Feature Coming Soon
                  </h2>
                  <p className="text-arkivis-mutedDark dark:text-arkivis-mutedLight mb-4">
                    Collaborate and share notes with friends in our next update!
                  </p>
                </div>
              )}

              {activeTab === 'profile' && (
                <div className="card p-8">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                    {user.picture && (
                      <img 
                        src={user.picture} 
                        alt={user.name} 
                        className="h-24 w-24 rounded-full border-4 border-arkivis-neonPurple"
                      />
                    )}
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{user.name}</h2>
                      <p className="text-arkivis-mutedDark dark:text-arkivis-mutedLight">{user.email}</p>
                      <div className="mt-4 space-x-2">
                        <button className="btn-secondary text-sm">Edit Profile</button>
                        <button className="btn-primary text-sm">Share Profile</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App; 