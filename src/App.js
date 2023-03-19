import "./App.css";
import { createContext, useEffect, useState } from "react";
import Rout from "./Rout";
import Header from "./components/Header/Header";
import Login from "./components/pages/login/Login";

export const GoblaData = createContext();

function App() {
  const [linkStatus, setLinkStatus] = useState({
    home: false,
    product: false,
    user: false,
    contact: false,
  });
  const [loginState, setloginState] = useState(false);

  const linkClicked = (linkId) => {
    setLinkStatus(() => {
      switch (linkId) {
        case "home":
          return { home: true, product: false, user: false, contact: false };
        case "product":
          return { home: false, product: true, user: false, contact: false };
        case "user":
          return { home: false, product: false, user: true, contact: false };
        case "contact":
          return { home: false, product: false, user: false, contact: true };
        default:
          break;
      }
    });
  };
  return (
    <GoblaData.Provider
      value={{ linkClicked, linkStatus, setLinkStatus, setloginState }}
    >
      <div className="app">
        {true ? (
          <>
            <Header />
            <Rout />
          </>
        ) : (
          <Login />
        )}
      </div>
    </GoblaData.Provider>
  );
}

export default App;
