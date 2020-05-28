import React, { useState } from "react";

export const AuthContext = React.createContext({
  isAuth: false,
  login: () => {},
  logout: () => {},
});

function AuthComponent(props) {
  const [isAuth, setIsAuth] = useState();
  const loginHandler = (res) => {
    localStorage.setItem("Token", res.data.token);
    setIsAuth(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("Token");
    setIsAuth(false);
  };
  return (
    <AuthContext.Provider
      value={{ isAuth: isAuth, login: loginHandler, logout: logoutHandler }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthComponent;
