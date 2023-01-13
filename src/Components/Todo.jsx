import React from "react";
import useStore from "../Store/Store";

const Todo = ({ title, content, isCompleted, id }) => {
  const dispatch = useStore()[1];

  const btnClickHandler = () => {
    dispatch("TOGGLE_COMPLETED", id);
  };

  return (
    <div className=" flex flex-col border rounded-2xl p-4 mt-1">
      <h3 className=" font-bold text-cyan-700">{title}</h3>
      <span>{content}</span>
      <span>{`CreatedTime ${new Date().toDateString()}`}</span>
      <button
        onClick={btnClickHandler}
        className=" bg-cyan-700 text-cyan-50 p-2 rounded-xl mt-2 w-fit"
      >
        {isCompleted ? "Completed" : "Yet to Complete"}
      </button>
    </div>
  );
};

export default React.memo(Todo);
