import { useSelector } from "react-redux";
import FavoriteUser from "../User/FavoriteUser";
import "./UsersList.css";
const FavoriteList = ({}) => {
  let jobsState = useSelector((state) => state.jobs);

  const { favoriteList } = jobsState;
  return (
    <div className="userslist">
      {favoriteList &&
        favoriteList.map((item) => {
          const {cust_id } = item;
          return <FavoriteUser newItem={item && item} key={cust_id} />;
        })}
      
    </div>
  );
};

export default FavoriteList;
