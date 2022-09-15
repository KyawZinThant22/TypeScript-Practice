import React, { useState } from "react";

const LoggedIn = () => {
  const [isLogged, setIsLogged] = useState(false);
  const handleLogin = () => {
    setIsLogged(true);
  };
  const handleLogout = () => {
    setIsLogged(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div> {isLogged ? "Logged in" : "Logged out"} </div>
    </div>
  );
};

export default LoggedIn;
