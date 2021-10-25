import { useEffect } from "react";
import axios from "axios";
import Modal from "../../UI/Modal";
import "./Login.scss";

const ENDPOINT = process.env.REACT_APP_ENDPOINT;
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const Login = () => {
  const loginHandler = (e) => {
    e.preventDefault();
  };
  //1. 구글 소셜로그인 버튼 클릭 -> 코드 받아오기
  const googleHandler = () => {
    window.location.assign(
      `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&response_type=code&scope=openid email&redirect_uri=${ENDPOINT}/login`
    );
  };

  //3. 서버callback으로, 코드 보내주기
  const getAT = async (authorizationCode) => {
    console.log(authorizationCode);
    const res = await axios.post(
      "http://localhost:8080/callback",
      { authorizationCode },
      { withCredentials: true }
    );
    if (res.status === 200) {
      window.location.href = "/";
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
