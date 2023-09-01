import { createContext, useContext, useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "gmshareddata";
const Context = createContext<any>({});

export const useGmdpData = () => {
  const contextState = useContext(Context);
  if (contextState === null) {
    throw new Error("useGmdpData must be used within a GMDPDataProvider tag");
  }
  return contextState;
};

const setLocalStorage = (data: string) => {
  if (typeof window !== "undefined" && window.localStorage) {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, data);
  }
};

const getLocalStorage = () => {
  let returnLocalData = null;
  if (typeof window !== "undefined" && window.localStorage) {
    try {
      returnLocalData = JSON.parse(
        window.localStorage.getItem(LOCAL_STORAGE_KEY)
      );
    } catch (error) {
      console.error("Error getting local storage ", error);
      returnLocalData = null;
    }

    return returnLocalData;
  }

  return returnLocalData;
};

export const GMDPDataProvider = (props: any) => {
  const [state, setState] = useState({});

  useEffect(() => {
    const makeRequest = async () => {
      const response = await fetch(
        "https://run.mocky.io/v3/ddf92eb0-5e12-42fc-9137-fdfc6c10b731"
      );
      const responseData = await response.json();
      setState(responseData);
      try {
        setLocalStorage(JSON.stringify(responseData));
      } catch (error) {
        console.error("Error setting local storage: ", error);
      }
    };
    const gmSharedData = getLocalStorage();
    if (gmSharedData !== null) {
      setState(gmSharedData);
      console.log("using local storage");
    } else {
      console.log("makeRequest");
      makeRequest();
    }
  }, []);

  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};
