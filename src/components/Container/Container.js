import UsersList from "../UserList/UsersList"
import Footer from "../Footer/Footer"
import "./Container.css"
const Container = () => {
  return (
    <div className="container">
        <h1>Hire Top Developers</h1>
        <UsersList/>
        <Footer/>
    </div>
  )
}

export default Container