import { useState } from "react";
import Modal from "../../UI/modal/Modal";
import LoginHeader from "./LoginHeader";
import LoginBody from "./LoginBody";
import SignUp from "./Signup";

const Login = ({ loginTab, loginTabHadler }) => {
  return (
    <Modal>
      <LoginHeader loginTab={loginTab} loginTabHadler={loginTabHadler} />
      {loginTab ? <LoginBody /> : <SignUp />}
    </Modal>
  );
};

export default Login;
