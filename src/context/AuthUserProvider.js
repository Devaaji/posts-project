import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { createContext } from "react";

export const AuthUserContext = createContext();

const AuthUserProvider = ({ children }) => {
  const [user, setUser] = useState();

  const setLogin = (newId, newUsername, newEmail) => {
    Cookies.set("_i", newId);
    Cookies.set("_u", newUsername);
    Cookies.set("_e", newEmail);

    setAuthUserCookie();
  };

  const id = user !== undefined ? user.id : "";
  const username = user !== undefined ? user.username : "";
  const email = user !== undefined ? user.email : "";

  const setAuthUserCookie = () => {
    setUser({
      id: Cookies.get("_i") || null,
      username: Cookies.get("_u") || null,
      email: Cookies.get("_e") || null,
    });
  };

  useEffect(() => {
    setAuthUserCookie();
  }, []);

  return (
    <AuthUserContext.Provider
      value={{
        id: id,
        username: username,
        email: email,
        setLogin,
      }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};

export default AuthUserProvider;
