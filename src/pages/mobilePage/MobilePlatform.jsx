import React from "react";
import { useSelector } from "react-redux";
import { CircleLoader } from "react-spinners";
import FgameCard from "../../components/FgameCard/FgameCard";

const MobilePlatform = () => {
  const { games, loading, error } = useSelector((state) => state.AllGames);
  const mobileGames = games.filter((game) => game.platform !== "PC (Windows)");

  return (
    <div className="pcPage py-4">
      <div className="container">
        <div className="row g-4">
          {loading ? (
            <div className="d-flex align-items-center justify-content-center">
              <CircleLoader color="#36d7b7" />
            </div>
          ) : (
            mobileGames.map((game) => <FgameCard game={game} key={game.id} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default MobilePlatform;
