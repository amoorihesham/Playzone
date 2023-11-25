import HomeShow from "../../components/HomeShow/HomeShow";
import FeaturedGames from "../../containers/FeaturedGames/FeaturedGames";
import FilterArea from "../../containers/FilterArea/FilterArea";
import NewsContainer from "../../containers/NewsContainer/NewsContainer";
import GiveAway from "../../containers/GiveAway/GiveAway";

const Home = () => {
  return (
    <>
      <HomeShow />
      <FeaturedGames />
      <FilterArea />
      <NewsContainer />
      <GiveAway />
    </>
  );
};

export default Home;
