import { Link } from "react-router-dom";

const FgameCard = ({
  game: { thumbnail, short_description, id, title, platform },
}) => {
  return (
    <div className="col-md-4">
      <div className="game__box bg-body-secondary p-3 rounded">
        <div className=" position-relative z-3">
          <img src={thumbnail} alt={short_description} className="w-100" />
          <div className="game__info d-flex align-items-center justify-content-between mt-3">
            <Link to={`/game/${id}`} className="linkNoLine text-black">
              <h4 className="m-0">{title?.split(" ").slice(0, 4).join(" ")}</h4>
            </Link>
            <span className="inline-block bg-primary py-1 px-2 rounded text-white">
              {platform}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FgameCard;
