import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div></div>
      <p>
        <Link to={"/admin"}>Manage Books</Link>
      </p>
    </div>
  );
}

export default Footer