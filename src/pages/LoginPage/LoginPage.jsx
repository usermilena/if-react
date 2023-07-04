import React, { useState } from "react";

import { Button } from "../../components/Button";
import { TopHeader } from "../../components/TopHeader";
import { useAuth } from "../../contexts/AuthContext";
import "./LoginPage.css";

export const LoginPage = () => {
  const [email, setEmail] = useState("");

  const { login } = useAuth();

  return (
    <div className="login--wrapper">
      <TopHeader />
      <div className="login">
        <h2 className="login--title">Sign in</h2>
        <h3 className="login--title">Email address</h3>
        <input
          className="login--input"
          type="text"
          placeholder="Enter email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <Button text="Continue" onClick={() => login(email)} />
      </div>
    </div>
  );
};
