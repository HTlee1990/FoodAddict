import { useState } from "react";
import axios from "axios";
import "./ListPage.scss";
import { IoSearch } from "react-icons/io5";

const ENDPOINT = process.env.REACT_APP_ENDPOINT;

const ListPage = () => {
  const [enteredText, setEnteredText] = useState("");

  const inputHandler = (e) => {
    setEnteredText(e.target.value);
  };
  const searchHandler = async () => {
    const res = await axios.post(
      `${ENDPOINT}/search`,
      { data: enteredText },
      { withCredentials: true }
    );
    console.log(res);
  };
  return (
    <div className="list__header">
      <div className="categories__container">
        <p>전체</p>
        <p>일식</p>
      </div>
      <div className="search__bar__container">
        <div className="search__bar">
          <input
            type="text"
            className="search__input"
            placeholder="enter your search"
            aria-label="search"
            onChange={inputHandler}
          />
          <button
            className="search__bar__btn"
            aria-label="search button"
            onClick={searchHandler}
          >
            <IoSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListPage;
