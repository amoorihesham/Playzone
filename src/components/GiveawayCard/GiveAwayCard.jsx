import { Link } from "react-router-dom";
import "./style.css";

const GiveAwayCard = ({
  deal: { title, giveaway_url, keys_left, short_description, thumbnail },
}) => {
  return (
    <div className="col-md-2">
      <div className="dealBox text-center">
        <img src={thumbnail} alt={title} className="w-100" />
        <h4 className="mt-3 fs-5">{title?.split(" ").slice(0, 3).join(" ")}</h4>
        <p>{short_description}</p>
        <div
          className="progress"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className={`progress-bar ${
              parseInt(keys_left) >= 90
                ? "bg-danger"
                : parseInt(keys_left) > 50 && parseInt(keys_left) < 90
                ? "bg-warning"
                : "bg-primary"
            }`}
            style={{ width: keys_left }}
          >
            {keys_left}
          </div>
        </div>
        <Link className="btn btn-primary mt-3" to={giveaway_url}>
          Giveaway Link
        </Link>
      </div>
    </div>
  );
};

export default GiveAwayCard;
