import { useEffect, useContext, useRef } from "react";
import axios from "axios";
import { Context } from "../../context/ContextProvider";
import "./Login.scss";
import google_btn from "../../statics/btn_google.png";

const ENDPOINT = process.env.REACT_APP_ENDPOINT;
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const LoginBody = () => {
  const idRef = useRef();
  const PWRef = useRef();
  const { loginModalHandler } = useContext(Context);

  //일반 로그인 핸들러
  const loginHandler = async (e) => {
    try {
      e.preventDefault();
      const headers = {
        id: idRef.current.value,
        password: PWRef.current.value,
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      };
      const res = await axios.post(
        `${ENDPOINT}/login`,
        { data: null },
        { headers: headers, withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    }
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
    <div className="modal__content">
      <form className="login__form" onSubmit={loginHandler}>
        <div className="input__container">
          <input
            id="id"
            type="text"
            ref={idRef}
            placeholder=" "
            autoComplete="new-password"
            required
          />
          <label className="input__label" htmlFor="id">
            Email
          </label>
        </div>
        <div className="input__container">
          <input
            id="pw"
            ref={PWRef}
            type="password"
            placeholder=" "
            autoComplete="new-password"
            required
          />
          <label className="input__label" htmlFor="pw">
            Password
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
      <button className="google__btn" onClick={googleHandler}>
        <img src={google_btn} />
      </button>
    </div>
  );
};

export default LoginBody;
