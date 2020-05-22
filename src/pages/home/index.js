import React, { useState } from "react";
import { Redirect } from "react-router-dom";

function Home() {
  const [redirect, setRedirect] = useState(false);
  function handleClick() {
    localStorage.removeItem("Token");
    setRedirect(true);
  }

  if (redirect) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
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
