import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

type AuthStatus = {
  loggedIn: boolean;
  checkingStatus: boolean;
};

export function useAuthStatus(): AuthStatus {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    console.log(auth);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
        console.log("loggedIn:" + loggedIn);
      }
      setCheckingStatus(false);
      console.log("checkingStatus:" + checkingStatus);
    });
  }, [loggedIn, checkingStatus]);

  return { loggedIn, checkingStatus };
}
