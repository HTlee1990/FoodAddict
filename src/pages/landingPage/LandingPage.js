import LandingPageHeader from "../../components/landingPageHeader/LandingPageHeader";
import "./LandingPage.scss";
const LandingPage = () => {
  return (
    <div>
      <LandingPageHeader />
      <div> 오늘의 맛집 </div>
      <div className="today__card__container"></div>
    </div>
  );
};

export default LandingPage;
