import React from "react";
import { navigator } from "./Navigator";

const Link = ({ to, children }) => {
  const navigate = (event) => {
    event.preventDefault();
    navigator(to);
  };

  return (
    <a className=" pl-8 items-center" href={to} onClick={navigate}>
      {children}
    </a>
  );
};

export default Link;
