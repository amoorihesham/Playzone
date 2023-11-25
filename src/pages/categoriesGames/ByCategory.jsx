import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGamesByCategory } from "../../redux/gamesByCategory/GamesByCategory";
import { useParams } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import FgameCard from "../../components/FgameCard/FgameCard";

const ByCategory = () => {
  const { cate } = useParams();
  const dispatch = useDispatch();
  const { games, loading, error } = useSelector(
    (state) => state.GamesByCategory
  );

  useEffect(() => {
    dispatch(getGamesByCategory(cate));
  }, [cate]);
  return (
    <div className="pcPage py-4">
      <div className="container">
        <div className="row g-4">
          {loading ? (
            <div className="d-flex align-items-center justify-content-center">
              <CircleLoader color="#36d7b7" />
            </div>
          ) : (
            games.map((game) => <FgameCard game={game} key={game.id} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default ByCategory;
