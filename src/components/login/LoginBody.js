import { useRef } from "react";
import axios from "axios";
import "./Login.scss";
import google_btn from "../../statics/btn_google.png";

const ENDPOINT = process.env.REACT_APP_ENDPOINT;

const LoginBody = ({ googleHandler }) => {
  const idRef = useRef();
  const PWRef = useRef();

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
      if (res) localStorage.setItem("logged-in", true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="modal__content">
      <form className="login__form" onSubmit={loginHandler} autoComplete="off">
        <div className="input__container">
          <input id="id" type="text" ref={idRef} placeholder=" " required />
          <label className="input__label" htmlFor="id">
            Email
          </label>
        </div>
        <div className="input__container">
          <input id="pw" ref={PWRef} type="password" placeholder=" " required />
          <label className="input__label" htmlFor="pw">
            Password
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="modal__divider">또는</div>
      <button className="google__btn" onClick={googleHandler}>
        <img src={google_btn} alt="google Login btn" />
      </button>
    </div>
  );
};

export default LoginBody;
