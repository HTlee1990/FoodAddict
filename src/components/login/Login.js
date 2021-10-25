import { useEffect, useContext } from "react";
import axios from "axios";
import Modal from "../../UI/modal/Modal";
import "./Login.scss";
import { Context } from "../../context/ContextProvider";

const ENDPOINT = process.env.REACT_APP_ENDPOINT;
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const Login = () => {
  const { loginModalHandler } = useContext(Context);

  //일반 로그인 핸들러
  const loginHandler = async (e) => {
    e.preventDefault();
    const headers = {
      //   id: enteredId,
      //   password: enteredPw,
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    };
    const res = await axios.post(
      `${ENDPOINT}/login`,
      { data: null },
      { headers: headers, withCredentials: true }
    );
  };

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
      <div className="modal__content">
        Login
        <form className="login__form" onSubmit={loginHandler}>
          <label htmlFor="id">ID</label>
          <input id="id" />
          <label htmlFor="pw">PW</label>
          <input id="pw" />

          <button type="submit">Login</button>
        </form>
        <button onClick={googleHandler}>Google</button>
      </div>
    </Modal>
  );
};

export default Login;
