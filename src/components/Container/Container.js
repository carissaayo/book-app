import UsersList from "../UserList/UsersList";
import Footer from "../Footer/Footer";
import "./Container.css";
import { useSelector } from "react-redux";
const Container = ({}) => {
  let jobsState = useSelector((state) => state.jobs);
  const { data, error, pending } = jobsState;

  return (
    <div className="container">
      <h1>Hire Top Developers</h1>

      {data.length > 0 ? (
        <UsersList />
      ) : (
        <div className="loading">
          <h2>Loading ...</h2>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Container;
