import { useEffect, useContext } from "react";
import Modal from "../../UI/modal/Modal";
import LoginHeader from "./LoginHeader";
import LoginBody from "./LoginBody";
import SignUp from "./Signup";
import { Context } from "../../context/ContextProvider";
import axios from "axios";

const ENDPOINT = process.env.REACT_APP_ENDPOINT;
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const Login = ({ loginTab, loginTabHadler }) => {
  const { loginModalHandler } = useContext(Context);

  //1. 구글 소셜로그인 버튼 클릭 -> 코드 받아오기
  const googleHandler = () => {
    loginModalHandler();
    window.open(
      `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&response_type=code&scope=openid email&redirect_uri=${ENDPOINT}/login`,
      "windowname1",
      "width=800, height=600"
    );
  };

  //3. 서버callback으로, 코드 보내주기
  const getAT = async (authorizationCode) => {
    const res = await axios.post(
      "http://localhost:8080/callback",
      { authorizationCode },
      { withCredentials: true }
    );
    if (res) {
      window.close();
      localStorage.setItem("loggd-in", true);
    }
  };

  //2. 코드 받아오면, getAT함수실행
  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get("code");
    if (!authorizationCode) return;
    getAT(authorizationCode);
  }, []);
  return (
    <Modal>
      <LoginHeader loginTab={loginTab} loginTabHadler={loginTabHadler} />
      {loginTab ? (
        <LoginBody googleHandler={googleHandler} />
      ) : (
        <SignUp googleHandler={googleHandler} />
      )}
    </Modal>
  );
};

export default Login;
