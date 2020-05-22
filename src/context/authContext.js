import React, { useState } from "react";

export const AuthContext = React.createContext({
  isAuth: false,
  login: () => {},
});

function AuthComponent(props) {
  const [isAuth, setIsAuth] = useState();
  const loginHandler = () => {
    setIsAuth(!isAuth);
  };
  return (
    <AuthContext.Provider value={{ isAuth: isAuth, login: loginHandler }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthComponent;
