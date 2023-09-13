import { createContext, useContext, useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "gmshareddata";
const Context = createContext<GmdpDataType>({
  mockApi: null,
  counter: 0,
  increaseCounter: () => {},
});
export type GmdpDataType = {
  mockApi: any;
  counter: number;
  increaseCounter: () => void;
};
export const useGmdpData = (): GmdpDataType => {
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

const getLocalStorage = (): GmdpDataType | null => {
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
  const [state, setState] = useState({ mockApi: {}, counter: 0 });

  const increaseCounter = () => {
    const freshState = { ...state, counter: state.counter + 1 };
    setState(freshState);
    setLocalStorage(JSON.stringify(freshState));
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/ddf92eb0-5e12-42fc-9137-fdfc6c10b731"
        );
        const responseData = await response.json();
        const freshState = { ...state, mockApi: responseData };
        setState(freshState);
        try {
          setLocalStorage(JSON.stringify(freshState));
        } catch (error) {
          console.error("Error setting local storage: ", error);
        }
      } catch (error) {
        console.error("Error fetching mock data: ", error);
      }
    };
    const gmSharedData = getLocalStorage();
    if (gmSharedData !== null) {
      setState(gmSharedData);
      console.log("using local storage: ", gmSharedData);
    } else {
      console.log("makeRequest");
      makeRequest();
    }
  }, []);

  return (
    <Context.Provider value={{ ...state, increaseCounter }}>
      {props.children}
    </Context.Provider>
  );
};
