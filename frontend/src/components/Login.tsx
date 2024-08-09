import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

interface LoginProps {
  onLoginSuccess: (user: any) => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const handleLoginSuccess = (response: any) => {
    console.log("Login Success:", response);
    onLoginSuccess(response);
  };

  const handleLoginFailure = (error: any) => {
    console.log("Login Failed:", error);
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div>
        <h2>Login</h2>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={() => handleLoginFailure("Login Failed")}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
