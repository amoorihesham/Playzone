import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGiveaways } from "../../redux/giveawaysSlice/GiveawaySlice";
import GiveAwayCard from "../../components/GiveawayCard/GiveAwayCard";

const GiveAway = () => {
  const { giveaways, loading, errors } = useSelector(
    (state) => state.Giveaways
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGiveaways());
  }, []);
  return (
    <div className="giveAway py-5 bg-body-secondary">
      <div className="container">
        <div className="title__container d-flex align-items-center gap-1">
          <h3 className="sec__title">Hot Deals</h3>
          <span className="sec__name">90% off</span>
        </div>
        <div className="row gy-5 mt-2">
          {loading
            ? "loading"
            : giveaways.map((deal) => (
                <GiveAwayCard deal={deal} key={deal.id} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default GiveAway;
