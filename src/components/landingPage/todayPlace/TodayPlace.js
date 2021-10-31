import LandingPageHeader from "./header/LandingPageHeader";

const TodayPlace = () => {
  return (
    <div class="landing__first__container">
      <LandingPageHeader />
      <div className="today__container">
        <div className="today__title"> 오늘의 맛집</div>
      </div>
      <div className="today__card__container">
        <div className="today__card">
          <div className="place__info__container">
            <span>주다</span>
            <span>⭐️4.9</span>
          </div>
        </div>
        <div className="today__card">
          <div className="place__info__container">
            <span>주다</span>
            <span>⭐️4.9</span>
          </div>
        </div>
        <div className="today__card">
          <div className="place__info__container">
            <span>주다</span>
            <span>⭐️4.9</span>
          </div>
        </div>
        <div className="today__card">
          <div className="place__info__container">
            <span>주다</span>
            <span>⭐️4.9</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayPlace;
