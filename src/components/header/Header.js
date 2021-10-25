import { useState, useContext } from "react";
import Login from "../login/Login";
import "./Header.scss";
import { Context } from "../../context/ContextProvider";
const Header = () => {
  const { loginModalOpen, setLoginHandler, loginModalHandler } =
    useContext(Context);
  const [clicked, setClicked] = useState(false);
  const navHandler = () => {
    setClicked((prev) => !prev);
  };
  const testHandler = () => {
    loginModalHandler();
  };

  return (
    <>
      {loginModalOpen && <Login />}
      <div className="header__container">
        <div className="nav__logo">This is Logo</div>

        <div
          className={
            clicked ? "nav__items__container spreaded" : "nav__items__container"
          }
        >
          <div className="hamburger__container" onClick={navHandler}>
            <div className={clicked ? "hamburger spreaded" : "hamburger"}></div>
            <div className={clicked ? "hamburger spreaded" : "hamburger"}></div>
            <div className={clicked ? "hamburger spreaded" : "hamburger"}></div>
          </div>

          <ul className="nav__lists">
            <li className="nav__item">
              <p className="item__link">menu1</p>
            </li>
            <li className="nav__item">
              <p className="item__link">menu2</p>
            </li>
            <li className="nav__item" onClick={testHandler}>
              <p className="item__link">Sign in</p>
            </li>
            <li className="nav__item">
              <p className="item__link">Sign up</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
