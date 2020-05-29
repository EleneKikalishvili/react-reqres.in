import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext({
  isAuth: false,
  login: () => {},
  logout: () => {},
});

function AuthComponent(props) {
  const [isAuth, setIsAuth] = useState(false);

  const loginHandler = (res) => {
    localStorage.setItem("Token", res.data.token);
    setIsAuth(true);
  };

  useEffect(() => {
    const localData = localStorage.getItem("Token");
    return localData ? setIsAuth(true) : setIsAuth(false);
  }, []);

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
