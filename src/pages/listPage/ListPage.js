import { useState } from "react";
import axios from "axios";
import { IoSearch } from "react-icons/io5";
import ListCard from "../../components/listCard/ListCard";
import dummyData from "../../statics/dummy/dummyData";
import "./ListPage.scss";

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
    <div className="list__container">
      <div className="list__header">
        <div className="categories__container">
          <p>전체</p>
          <p>일식</p>
          <p>양식</p>
          <p>한식</p>
          <p>중식</p>
          <p>술집</p>
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
      <div className="cards__container">
        {dummyData.map((li) => (
          <ListCard key={li.id} list={li} />
        ))}
      </div>
    </div>
  );
};

export default ListPage;
