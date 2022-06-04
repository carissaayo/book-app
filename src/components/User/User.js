import "./User.css";
import coverImage from "../../data/FB_IMG_1540481767882.jpg";
const User = () => {
  return (
    <section className="user">
      <div className="user__img__con">
        <img src={coverImage} alt="user-cover" className="user__cover__img" />
        <span className="user__like__con"></span>
        <img src={coverImage} alt="user" className="user__img" />
      </div>
      <div className="user__details">
        <div>
          <h4 className="user__name">Name</h4>
          <p className="user__price">Price</p>
        </div>
        <div className="user__button__con">
          <button type="button" className="user__button">Hire</button>
        </div>
      </div>
    </section>
  );
};

export default User;
