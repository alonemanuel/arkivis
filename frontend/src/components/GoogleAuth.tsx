import React, { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

interface UserInfo {
  name: string;
  email: string;
  picture?: string;
}

interface GoogleAuthProps {
  onLogin: (userInfo: UserInfo) => void;
}

const GoogleAuth: React.FC<GoogleAuthProps> = ({ onLogin }) => {
  return (
    <div className="flex justify-center">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          if (credentialResponse.credential) {
            const decoded: any = jwtDecode(credentialResponse.credential);
            const userInfo: UserInfo = {
              name: decoded.name,
              email: decoded.email,
              picture: decoded.picture
            };
            onLogin(userInfo);
          }
        }}
        onError={() => {
          console.log('Login Failed');
        }}
        useOneTap
      />
    </div>
  );
};

export default GoogleAuth; 