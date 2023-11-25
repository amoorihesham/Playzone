import "./searchbox.css";
import FgameCard from "../FgameCard/FgameCard";
import { useSelector } from "react-redux";
import { useState } from "react";
import { CircleLoader } from "react-spinners";

const SearchBox = () => {
  const { games, loading, errors } = useSelector((state) => state.AllGames);
  const [results, setResults] = useState([]);
  const search = (term) => {
    if (!term) {
      setResults([]);
    } else {
      let srchResults = games.filter(
        (game) =>
          game.title.toLowerCase().includes(term.toLowerCase()) ||
          game.publisher.toLowerCase().includes(term.toLowerCase()) ||
          game.developer.toLowerCase().includes(term.toLowerCase()) ||
          game.short_description.toLowerCase().includes(term.toLowerCase())
      );
      setResults(srchResults);
    }
  };

  return (
    <div className="search__handler-area py-4">
      <form className="search__manual">
        <input
          type="text"
          className="form-control"
          placeholder="Search By Name"
          name="gName"
          onChange={(e) => search(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>

      <div className="results__area p-4 bg-body-tertiary mt-5">
        <div className="row g-4">
          {results.length == 0 ? (
            <div className="d-flex align-items-center justify-content-center">
              <CircleLoader color="#36d7b7" />
              <h5 className="ms-4">
                No Results To Show Please Type Something.!
              </h5>
            </div>
          ) : (
            results.map((game) => <FgameCard key={game.id} game={game} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
