import { useSelector } from "react-redux";
import FgameCard from "../../components/FgameCard/FgameCard";
import { CircleLoader } from "react-spinners";

const PcPlatform = () => {
  const { games, loading, error } = useSelector((state) => state.AllGames);
  const pcGames = games.filter((game) => game.platform == "PC (Windows)");

  return (
    <div className="pcPage py-4">
      <div className="container">
        <div className="row g-4">
          {pcGames ? (
            pcGames.map((game) => <FgameCard game={game} key={game.id} />)
          ) : (
            <div className="d-flex align-items-center justify-content-center">
              <CircleLoader color="#36d7b7" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PcPlatform;
