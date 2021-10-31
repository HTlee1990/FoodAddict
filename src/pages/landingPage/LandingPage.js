import TodayPlace from "../../components/landingPage/todayPlace/TodayPlace";
import TopPlace from "../../components/landingPage/topPlace/TopPlace";
import LatestReview from "../../components/landingPage/latestReview/LatestReview";
import "./LandingPage.scss";
const LandingPage = () => {
  return (
    <div className="landing__container">
      <TodayPlace />
      <TopPlace />
      <LatestReview />
    </div>
  );
};

export default LandingPage;
