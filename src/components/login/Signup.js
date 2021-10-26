import { useState, useRef } from "react";
import axios from "axios";
import google_btn from "../../statics/btn_google.png";

const ENDPOINT = process.env.REACT_APP_ENDPOINT;

const Signup = ({ googleHandler }) => {
  const idRef = useRef();
  const nicknameRef = useRef();
  const PWRef = useRef();
  const cPWRef = useRef();
  const [err, setErr] = useState({ id: "", nickname: "", pw: "", cpw: "" });

  const signUpHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${ENDPOINT}/signup`,
        {
          id: idRef.current.value,
          password: PWRef.current.value,
          nickname: nicknameRef.current.value,
        },
        { withCredentials: true }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="modal__content">
      <form className="login__form" onSubmit={signUpHandler} autoComplete="off">
        <div className="input__container">
          <input id="id" type="text" ref={idRef} placeholder=" " required />
          <label className="input__label" htmlFor="id">
            Email
          </label>
          {err.id.length !== 0 && <div>{err}</div>}
        </div>
        <div className="input__container">
          <input
            id="nickname"
            type="text"
            ref={nicknameRef}
            placeholder=" "
            required
          />
          <label className="input__label" htmlFor="nickname">
            Nickname
          </label>
        </div>
        <div className="input__container">
          <input id="pw" ref={PWRef} type="password" placeholder=" " required />
          <label className="input__label" htmlFor="pw">
            Password
          </label>
        </div>
        <div className="input__container">
          <input
            id="cpw"
            ref={cPWRef}
            type="password"
            placeholder=" "
            required
          />
          <label className="input__label" htmlFor="cpw">
            Confirm Password
          </label>
        </div>
        <button type="submit">Join Us</button>
      </form>
      <div className="modal__divider">또는</div>
      <button className="google__btn" onClick={googleHandler}>
        <img src={google_btn} alt="google Login btn" />
      </button>
    </div>
  );
};

export default Signup;
