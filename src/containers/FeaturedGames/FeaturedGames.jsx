import { CircleLoader } from "react-spinners";
import FgameCard from "../../components/FgameCard/FgameCard";
import "./fGames.css";
import { useSelector } from "react-redux";

const FeaturedGames = () => {
  const { games, loading, errors } = useSelector((state) => state.AllGames);
  const topThree = games.slice(0, 3);

  return (
    <div className="featured__games  py-5">
      <div className="container">
        <div className="title__container d-flex align-items-center gap-1">
          <h3 className="sec__title">Featured</h3>
          <span className="sec__name">Games</span>
        </div>
        {loading ? (
          <CircleLoader color="#36d7b7" />
        ) : (
          <div className="row justify-content-center align-items-center g-3 mt-2">
            {topThree?.map((game, idx) => (
              <FgameCard game={game} key={game.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedGames;
