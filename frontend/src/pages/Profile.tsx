/**
 * Profile Page Component
 * 
 * Displays user profile information and account management options.
 * Features the user's profile picture, name, email, and action buttons.
 */

import React from 'react';
import { UserInfo } from '../types/User';

interface ProfileProps {
  user: UserInfo;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
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
  );
};

export default Profile; 