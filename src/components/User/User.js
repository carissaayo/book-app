import "./User.css";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faHeart } from "@fortawesome/free-solid-svg-icons";
import coverImage from "../../data/FB_IMG_1540481767882.jpg";
import { useState } from "react";
const User = ({newItem}) => {
  const{cust_id,avatar,display_name,starting_from,service_photo} =newItem;
  const [isLiked, setIsLiked] = useState(false)

  return (
    <section className="user">
      <div className="user__img__con">
        <img src={service_photo} alt="user-cover" className="user__cover__img" />
        {isLiked ? (
          <span
            className="user__like__con liked"
            onClick={() => {
              setIsLiked(false)
          
            }}
          >
            <FontAwesomeIcon icon={faHeart} />
          </span>
        ) : (
          <span className="user__like__con " onClick={() => setIsLiked(true)}>
            <FontAwesomeIcon icon={faHeart} />
          </span>
        )}
        <img src={avatar} alt="user" className="user__img" />
      </div>
      <div className="user__details">
        <div>
          <h4 className="user__name">{display_name}</h4>
          <p className="user__price">{starting_from}</p>
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
