import { useState } from "react";
import userContext from "./userContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "Jhon_raymond",
    password: "12345",
    status: false,
  });
  <userContext.Provider value={(user, setUser)}>
    {children}
  </userContext.Provider>;
};

export default UserContextProvider;
