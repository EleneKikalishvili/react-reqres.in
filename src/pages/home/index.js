import React from "react";
import { Redirect } from "react-router-dom";

function Home() {
  const token = localStorage.getItem("Token");
  return (
    <div>
      {!token && <Redirect to="/login" />}
      <h3>Home</h3>
    </div>
  );
}

export default Home;
