import React from "react";

const LoginHeader = ({ loginTab, loginTabHadler }) => {
  return (
    <div className="login__header__container">
      <p
        className={loginTab ? "selected login__header" : "login__header"}
        onClick={() => {
          loginTabHadler(1);
        }}
      >
        Log in
      </p>
      <p
        className={!loginTab ? "selected login__header" : "login__header"}
        onClick={() => {
          loginTabHadler(0);
        }}
      >
        Sign up
      </p>
    </div>
  );
};

export default LoginHeader;
