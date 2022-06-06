
import Footer from "../Footer/Footer";
import "./Container.css";
import { useSelector } from "react-redux";
import FavoriteList from "../UserList/FavoriteList";
const FavContainer = () => {
  let jobsState = useSelector((state) => state.jobs);
  const { favoriteList } = jobsState;
console.log(favoriteList);
  return (
    <div className="container">
      <h1>Hire Top Developers</h1>

      {favoriteList.length > 0 ? (
        <FavoriteList />
      ) : (
        <div className="loading">
          <h2>No favorite developer yet</h2>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default FavContainer;
