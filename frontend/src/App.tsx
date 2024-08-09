import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import NotesPage from "./pages/NotesPage";

const App: React.FC = () => {
  const [user, setUser] = useState<any>(null);

  const handleLoginSuccess = (userData: any) => {
    setUser(userData);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              user ? (
                <NotesPage user={user} />
              ) : (
                <Login onLoginSuccess={handleLoginSuccess} />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
