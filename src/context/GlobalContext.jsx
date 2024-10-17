import { createContext, useContext, useReducer } from "react";

const initialState = [
  { text: "cash", amount: -400 },
  { text: "camera", amount: 50 },
  { text: "grocery", amount: -100 },
];

const GlobalContext = createContext(initialState);

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      state = state.filter((item) => item.text !== action.payload);
      return state;
    default:
      return state;
  }
}
function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

function useGlobal() {
  const context = useContext(GlobalContext);
  return context;
}

export { GlobalProvider, useGlobal };
