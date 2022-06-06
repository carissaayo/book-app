import { useEffect } from "react";

import "./User.css";
import { addToFavorite,removeFromFavorite } from "../../context/jobsContext";

  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const User = ({newItem}) => {
  const{avatar,display_name,starting_from,service_photo} =newItem;
  const [isLiked, setIsLiked] = useState(false)
  let dispatch = useDispatch();
  let jobsState = useSelector((state) => state.jobs);

  const { favoriteList,singleCurrency } = jobsState;
  

useEffect(() => {
  localStorage.setItem("favorite",JSON.stringify(favoriteList))

}, [isLiked,favoriteList])

  return (
    <section className="user">
      <div className="user__img__con">
        <img
          src={service_photo}
          alt="user-cover"
          className="user__cover__img"
        />
        {isLiked ? (
          <span
            className="user__like__con liked"
            onClick={() => {
              setIsLiked(false);
              dispatch(removeFromFavorite({ ...newItem, isfavorite: false }));
            }}
          >
            <FontAwesomeIcon icon={faHeart} />
          </span>
        ) : (
          <span
            className="user__like__con "
            onClick={() => {
              setIsLiked(true);
              dispatch(addToFavorite({ ...newItem, isfavorite: true }));
              console.log(favoriteList);
            }}
          >
            <FontAwesomeIcon icon={faHeart} />
          </span>
        )}
        <img src={avatar} alt="user" className="user__img" />
      </div>
      <div className="user__details">
        <div>
          <h4 className="user__name">{display_name}</h4>
          <p className="user__price">
            {singleCurrency[0]?.symbol ? singleCurrency[0].symbol : "₦"}
            {singleCurrency[0]?.divider? Math.round(starting_from/singleCurrency[0].divider):starting_from}
          </p>
        </div>
        <div className="user__button__con">
          <button type="button" className="user__button">
            Hire
          </button>
        </div>
      </div>
    </section>
  );
};

export default User;
