import React, { useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchExactGame } from "../../redux/exactGameSlice/exactGameSlice";
import { CircleLoader } from "react-spinners";

const GamePage = () => {
  const { id } = useParams();
  const { game, loading, error } = useSelector((state) => state.ExactGame);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExactGame(id));
  }, [dispatch]);

  return (
    <div className="gamePage p-4 bg-dark-subtle f-height">
      <div className="container">
        <div className="row">
          {loading ? (
            <div className="d-flex align-items-center justify-content-center f-height">
              <CircleLoader color="#36d7b7" />
            </div>
          ) : (
            <>
              {" "}
              <div className="col-md-4">
                <div className="box">
                  <img
                    src={game?.thumbnail}
                    alt={game.title}
                    className="w-100"
                  />
                  <h4 className="btn btn-primary mt-2 w-100 m-auto d-block">
                    Play Now
                  </h4>
                  <div className="links">
                    <Link
                      className="btn btn-primary my-2 m-auto d-block w-100"
                      to={game.game_url}
                      target="_blank"
                    >
                      Game Site
                    </Link>
                    <Link
                      className="btn btn-success my-2 m-auto d-block w-100"
                      to={game.freetogame_profile_url}
                      target="_blank"
                    >
                      Free 2 Game Profile
                    </Link>
                  </div>
                  <div className="gInfo mt-4">
                    <p className=" fs-5">
                      Category: <span>{game.genre}</span>
                    </p>
                    <p className=" fs-5 ">
                      Platform: <span>{game.platform}</span>
                    </p>
                    <p className=" fs-5 ">
                      Publisher: <span>{game.publisher}</span>
                    </p>
                    <p className=" fs-5 ">
                      Developer: <span>{game.developer}</span>
                    </p>
                    <p className=" fs-5 ">
                      Release Date: <span>{game.release_date}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="box">
                  <h4>{game.title}</h4>
                  <p>About {game.title}</p>
                  <p>{game.description}</p>
                  <div className="screenShots mt-4">
                    <h5>Screenshots:</h5>
                    <div className="row g-3">
                      {game?.screenshots?.map((screen, idx) => (
                        <div className="col-md-6" key={idx}>
                          <img
                            src={screen.image}
                            alt={game.title}
                            className="w-100"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="requirments mt-4">
                    <h5 className="fs-4">System Requirments:</h5>
                    <ul>
                      <li>
                        {game.minimum_system_requirements?.os
                          ? game.minimum_system_requirements?.os
                          : "N-Confirmed"}
                      </li>
                      <li>
                        {game.minimum_system_requirements?.processor
                          ? game.minimum_system_requirements?.processor
                          : "N-Confirmed"}
                      </li>
                      <li>
                        {game.minimum_system_requirements?.memory
                          ? game.minimum_system_requirements?.memory
                          : "N-Confirmed"}
                      </li>
                      <li>
                        {game.minimum_system_requirements?.graphics
                          ? game.minimum_system_requirements?.graphics
                          : "N-Confirmed"}
                      </li>
                      <li>
                        {game.minimum_system_requirements?.storage
                          ? game.minimum_system_requirements?.storage
                          : "N-Confirmed"}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default GamePage;
