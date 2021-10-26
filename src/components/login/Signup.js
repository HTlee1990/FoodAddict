import { useRef } from "react";
import google_btn from "../../statics/btn_google.png";

const Signup = ({ googleHandler }) => {
  const idRef = useRef();
  const PWRef = useRef();

  const signUpHandler = () => {};
  return (
    <div className="modal__content">
      <form className="login__form" onSubmit={signUpHandler} autoComplete="off">
        <div className="input__container">
          <input id="id" type="text" ref={idRef} placeholder=" " required />
          <label className="input__label" htmlFor="id">
            Email
          </label>
        </div>
        <div className="input__container">
          <input
            id="nickname"
            type="text"
            ref={idRef}
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
            ref={PWRef}
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
