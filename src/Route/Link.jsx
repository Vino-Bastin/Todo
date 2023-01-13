import React from "react";

const Link = ({ to, children }) => {
  const navigate = (event) => {
    event.preventDefault();
    window.history.pushState({}, "", to);
    const newPath = new PopStateEvent("navigate");
    window.dispatchEvent(newPath);
  };

  return (
    <a className=" pl-8 items-center" href={to} onClick={navigate}>
      {children}
    </a>
  );
};

export default Link;
