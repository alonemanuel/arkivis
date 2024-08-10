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
    <GoogleOAuthProvider clientId="506700005225-jb8a56jktk9c1bsf9sfgrvemlm9tsd9v.apps.googleusercontent.com">
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
