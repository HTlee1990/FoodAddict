import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Login from "../login/Login";
import "./Header.scss";
import { Context } from "../../context/ContextProvider";

const Header = () => {
  const { loginModalOpen, loginModalHandler } = useContext(Context);
  const [loginTab, setLoginTab] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navHandler = () => {
    setClicked((prev) => !prev);
  };
  const signInModalHandler = (n) => {
    loginTabHadler(n);
    loginModalHandler();
  };
  const loginTabHadler = (n) => {
    setLoginTab(n);
  };
  const logoutHandler = () => {
    localStorage.removeItem("logged-in");
    setIsLoggedIn(false);
  };
  window.loginHandler = function () {
    setIsLoggedIn(localStorage.getItem("logged-in"));
  };

  const loginTest = localStorage.getItem("logged-in");
  useEffect(() => {
    setIsLoggedIn(loginTest);
  }, [loginTest]);

  return (
    <div className="header__big__container">
      {loginModalOpen && (
        <Login loginTab={loginTab} loginTabHadler={loginTabHadler} />
      )}
      <div className="header__container">
        <Link to="/">
          <div className="nav__logo">
            <p className="logo">PooK</p>
          </div>
        </Link>

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
            <Link to="/listPage">
              <li className="nav__item">
                <p className="item__link">List</p>
              </li>
            </Link>
            {!isLoggedIn && (
              <li className="nav__item" onClick={() => signInModalHandler(1)}>
                <p className="item__link">Sign in</p>
              </li>
            )}
            {isLoggedIn && (
              <li className="nav__item" onClick={logoutHandler}>
                <p className="item__link">Logout</p>
              </li>
            )}
            <li className="nav__item" onClick={() => signInModalHandler(0)}>
              <p className="item__link">Sign up</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
