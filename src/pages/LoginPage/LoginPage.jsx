import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { TopHeader } from "../../components/TopHeader";
import { authStatuses } from "../../constants/authStatuses";
import { setAuthStatus } from "../../store/actions/auth.action";
import "./LoginPage.css";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="login--wrapper">
      <TopHeader />
      <div className="login">
        <h2 className="login--title">Sign in</h2>
        <h3 className="login--title">Email address</h3>
        <input className="login--input" type="text" placeholder="Enter email" />
        <Button
          text="Continue"
          onClick={() => {
            dispatch(setAuthStatus(authStatuses.loggedIn));
            navigate("/");
          }}
        />
      </div>
    </div>
  );
};
