import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "brian",
      email: "kyawthant@gmail.com",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <h1>User Name is {user.name}</h1>
      <h1>User Email is {user.email} </h1>
    </div>
  );
};

export default User;
