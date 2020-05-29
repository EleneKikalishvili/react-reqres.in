import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Redirect } from "react-router-dom";
import UserList from "./users/UserList";
function Home() {
  const auth = useContext(AuthContext);

  const handleClick = () => {
    auth.logout();
  };

  return (
    <div>
      {!auth.isAuth && <Redirect to="/login" />}
      <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand" href="/">
          Home <span className="sr-only">(current)</span>
        </a>
        <form className="form-inline">
          <button
            className="btn btn-outline-dark my-2 my-sm-0"
            onClick={() => {
              handleClick();
            }}
          >
            Log Out
          </button>
        </form>
      </nav>
      <UserList />
    </div>
  );
}

export default Home;
