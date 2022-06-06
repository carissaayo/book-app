import { useEffect } from "react";

import "./User.css";
import { addToFavorite, removeFromFavorite } from "../../context/jobsContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import coverImage from "../../data/FB_IMG_1540481767882.jpg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const FavoriteUser = ({ newItem }) => {
  const { avatar, display_name, starting_from, service_photo, } =
    newItem;
  const [isLiked, setIsLiked] = useState(false);
  let dispatch = useDispatch();
  let jobsState = useSelector((state) => state.jobs);

  const { singleCurrency } = jobsState;


  return (
    <section className="user">
      <div className="user__img__con">
        <img
          src={service_photo}
          alt="user-cover"
          className="user__cover__img"
        />

        <span
          className="favorite__user__liked"
          onClick={() => {
            setIsLiked(false);
            dispatch(removeFromFavorite({ ...newItem, isfavorite: false }));
          }}
        >
          <FontAwesomeIcon icon={faHeart} />
        </span>

        <img src={avatar} alt="user" className="user__img" />
      </div>
      <div className="user__details">
        <div>
          {singleCurrency[0]?.symbol ? singleCurrency[0].symbol : "₦"}
          {singleCurrency[0]?.divider
            ? Math.round(starting_from / singleCurrency[0].divider)
            : starting_from}
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

export default FavoriteUser;
