import "./ListPage.scss";
import { IoSearch } from "react-icons/io5";

const ListPage = () => {
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
          />
          <button className="search__bar__btn" aria-label="search button">
            <IoSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListPage;
