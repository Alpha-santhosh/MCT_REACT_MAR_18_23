import { useContext, useEffect } from "react";
import { GoblaData } from "../App";

export const DotEffect = (para) => {
  const { linkClicked } = useContext(GoblaData);
  useEffect(() => {
    console.log("Welcome to User");
    linkClicked(para);
  }, []);
};
