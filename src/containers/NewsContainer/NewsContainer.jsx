import { useSelector } from "react-redux";
import NewsCard from "../../components/NewsCard/NewsCard";
import { CircleLoader } from "react-spinners";

const NewsContainer = () => {
  const { news, loading, error } = useSelector((state) => state.GetNews);
  return (
    <div className="newsCards py-5">
      <div className="container">
        <div className="title__container d-flex align-items-center gap-1">
          <h3 className="sec__title">Games</h3>
          <span className="sec__name">News</span>
        </div>
        <div className="row g-4 mt-2">
          {loading ? (
            <CircleLoader color="#36d7b7" />
          ) : (
            news
              .slice(0, 6)
              .map((article) => (
                <NewsCard news={article} status={loading} key={article.id} />
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsContainer;
