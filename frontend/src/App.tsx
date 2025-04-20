import React, { useState } from 'react';
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

  const handleLogin = (userInfo: UserInfo) => {
    setUser(userInfo);
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Arkivis</h1>
            {user && (
              <div className="flex items-center">
                {user.picture && (
                  <img 
                    src={user.picture} 
                    alt={user.name} 
                    className="h-8 w-8 rounded-full mr-2"
                  />
                )}
                <span className="text-gray-700">Hello {user.name.split(' ')[0]}</span>
              </div>
            )}
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {!user ? (
            <div className="bg-white p-8 rounded shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Welcome to Arkivis</h2>
              <p className="mb-6 text-gray-600">Please sign in with your Google account</p>
              <GoogleAuth onLogin={handleLogin} />
            </div>
          ) : (
            <div className="bg-white p-8 rounded shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome, {user.name}</h2>
              <p className="text-gray-600">You are logged in with {user.email}</p>
            </div>
          )}
        </main>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App; 