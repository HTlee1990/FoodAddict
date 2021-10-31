const LandingPageHeader = () => {
  return (
    <div className="categories__container">
      <div className="category">
        <img className="category__img" src="images/전체.png"></img>
        <p>전체</p>
      </div>
      <div className="category">
        <img className="category__img" src="images/한식.png"></img>
        <p>한식</p>
      </div>
      <div className="category">
        <img className="category__img" src="images/일식.png"></img>
        <p>일식</p>
      </div>
      <div className="category">
        <img className="category__img" src="images/양식.png"></img>
        <p>양식</p>
      </div>
      <div className="category">
        <img className="category__img" src="images/중식.png"></img>
        <p>중식</p>
      </div>
      <div className="category">
        <img className="category__img" src="images/다이닝.png"></img>
        <p>다이닝</p>
      </div>
      <div className="category">
        <img className="category__img" src="images/술집.png"></img>
        <p>펍&바</p>
      </div>
    </div>
  );
};

export default LandingPageHeader;
