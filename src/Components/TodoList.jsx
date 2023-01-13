import React from "react";
import Todo from "./Todo";
import useStore from "../Store/Store";

const TodoList = () => {
  const todo = useStore()[0].todo;

  return (
    <>
      {todo
        .filter((t) => !t.isCompleted)
        .map((t) => {
          return <Todo key={t.id} {...t} />;
        })}
    </>
  );
};

export default TodoList;
