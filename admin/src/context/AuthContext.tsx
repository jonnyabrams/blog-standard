import { createContext, useEffect, useState } from "react";

import {
  AuthContextProviderType,
  AuthContextType,
  LoginType,
} from "../typings";
import client from "../api/client";

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthContextProviderType) => {
  const [currentUser, setCurrentUser] = useState(
    // typecast returned value to string to stop it expecting string | null
    JSON.parse(localStorage.getItem("user") as string) || null
  );

  const login = async (user: LoginType) => {
    const res = await client.post("auth/login", user, {
      withCredentials: true,
    });

    console.log(currentUser)
    setCurrentUser(res.data);
  };

  const logout = () => {
    client.post("auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    try {
      // stringify because you can't store object in localStorage
      localStorage.setItem("user", JSON.stringify(currentUser));
    } catch (error) {
      console.error("Error setting user in localStorage:", error);
    }
  }, [currentUser]);

  return (
    // will be "cannot find namespace" error here unless you give this file a .tsx extension
    <AuthContext.Provider
      value={{ login, logout, currentUser, setCurrentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
