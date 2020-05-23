import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Redirect } from "react-router-dom";
import UserList from "./users/UserList";
function Home() {
  const [redirect, setRedirect] = useState(false);
  const auth = useContext(AuthContext);

  const handleClick = () => {
    localStorage.removeItem("Token");
    auth.login();
    setRedirect(true);
  };

  // function handleClick() {
  //   localStorage.removeItem("Token");
  //   setRedirect(true);
  // }

  return (
    <div>
      {redirect && <Redirect to="/login" />}
      <h3>Home</h3>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Log Out
      </button>
    </div>
  );
}

export default Home;
