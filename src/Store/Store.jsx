import { useEffect, useState } from "react";

let globalState = {};
let subscriptions = [];
let globalActions = {};

const useStore = () => {
  const setGlobalState = useState(globalState)[1];

  useEffect(() => {
    subscriptions.push(setGlobalState);

    return () => {
      subscriptions = subscriptions.filter(
        (subscription) => subscription !== setGlobalState
      );
    };
  }, [setGlobalState]);

  const dispatch = (action, payload) => {
    if (!globalActions[action]) throw new Error("invalid action");
    const newState = globalActions[action](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const subscriber of subscriptions) {
      subscriber(globalState);
    }
  };

  return [globalState, dispatch];
};

export const configureState = (initialValue, actions) => {
  globalState = { ...globalState, ...initialValue };
  globalActions = { ...globalActions, ...actions };
};

export default useStore;
