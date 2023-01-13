import React from "react";
import Link from "../Route/Link";

const Header = () => {
  return (
    <div className=" flex bg-cyan-500 text-cyan-50 font-sans items-center justify-between pl-40 pr-40 h-16">
      <span>Todo</span>
      <div>
        <Link to="/">Home</Link>
        <Link to="/new">New Todo</Link>
        <Link to="/done">Completed</Link>
      </div>
    </div>
  );
};

export default Header;
