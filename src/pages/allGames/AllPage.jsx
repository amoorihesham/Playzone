import React, { useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import FgameCard from "../../components/FgameCard/FgameCard";

const AllPage = () => {
  const { games, loading, errors } = useSelector((state) => state.AllGames);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(12);
  const countOfPages = Math.ceil(games.length / 10 + 1);

  let list = [];
  const renderdList = () => {
    for (let i = 1; i < countOfPages; i++) {
      list.push(i);
    }
    return list;
  };
  renderdList();
  const pageHandler = (end) => {
    setStart((prevState) => prevState + end);
    setEnd((prevState) => prevState + end);
    console.log(start);
    console.log(end);
  };
  const prevHandler = () => {
    if (start === 0) {
      return true;
    } else {
      console.log(start);
      console.log(end);
      setStart((prevState) => prevState - start);
      setEnd((prevState) => prevState - start);
    }
  };

  return (
    <div className="allGamesPage py-4">
      <div className="container">
        <div className="row g-4">
          {games?.slice(start, end).map((game) => (
            <FgameCard game={game} key={game.id} />
          ))}
          <div className="pagination">
            <ul className="list-unstyled p-0 m-0 d-flex align-items-center justify-content-center gap-2">
              {list.map((pagi) => (
                <li
                  className=" fw-medium border py-1 px-3 "
                  key={pagi}
                  onClick={() => pageHandler(pagi)}
                >
                  {pagi}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPage;
