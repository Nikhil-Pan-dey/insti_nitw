import { createContext, useEffect, useState, useContext } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import axios from "axios";
import { UserContext } from "./UserContext";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [userDetails, setUserDetails] = useState({});
  //const {currentUser, setCurrentUser} = useContext(UserContext)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      const fetchData = async () => {
        try {
          let reqLink = "http://localhost:8000/api/v1/users/getSession/" + user.email;
          const response = await axios.get(reqLink);
          setUserDetails(response.data);
        } catch (error) {
          console.log('Error! Please check input fields');
        }
      };

      setCurrentUser(user)

      if (user == null) {
        setUserDetails(null);
        return;
      }
  
      fetchData();
      // get user session from db
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, userDetails }}>
      {children}
    </AuthContext.Provider>
  );
};