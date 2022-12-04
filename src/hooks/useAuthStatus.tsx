import { useEffect, useRef, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

type AuthStatus = {
  loggedIn: boolean;
  checkingStatus: boolean;
};

export function useAuthStatus(): AuthStatus {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const auth = getAuth();
    console.log(auth);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(current => !current);
        console.log("loggedIn:" + loggedIn);
      }
      setCheckingStatus(current => !current);
      console.log("checkingStatus:" + checkingStatus);
    });
  }, [loggedIn, checkingStatus]);

  return { loggedIn, checkingStatus };
}
