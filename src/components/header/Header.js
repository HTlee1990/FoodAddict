import { useState } from "react";
import "./Header.scss";
import { ReactComponent as Blob1 } from "../../statics/blob-1.svg";
import { ReactComponent as Blob2 } from "../../statics/blob-2.svg";
import { ReactComponent as Blob3 } from "../../statics/blob-3.svg";
import { ReactComponent as Blob4 } from "../../statics/blob-4.svg";
import { ReactComponent as Blob5 } from "../../statics/blob-5.svg";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const navHandler = () => {
    setClicked((prev) => !prev);
  };

  return (
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
          <li className="nav__item">
            <p className="item__link">menu3</p>
          </li>
          <li className="nav__item">
            <p className="item__link">menu4</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
