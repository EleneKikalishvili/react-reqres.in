import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

function Home() {
  const auth = useContext(AuthContext);
  return (
    <div>
      {!auth.isAuth && <Redirect to="/login" />}
      <h3>Home</h3>
    </div>
  );
}

export default Home;
