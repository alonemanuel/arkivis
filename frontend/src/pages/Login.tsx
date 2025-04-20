/**
 * Login Page Component
 * 
 * Displays the welcome screen and login options when a user is not authenticated.
 * Features a clean, card-based layout with Google authentication.
 */

import React from 'react';
import GoogleAuth from '../components/GoogleAuth';
import { UserInfo } from '../types/User';

interface LoginProps {
  onLogin: (userInfo: UserInfo) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
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
                <GoogleAuth onLogin={onLogin} />
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
  );
};

export default Login; 