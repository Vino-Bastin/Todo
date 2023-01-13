import React from "react";
import useStore from "../Store/Store";

const NewTodo = () => {
  const dispatch = useStore()[1];

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch("NEW_TODO", {
      id: Math.random(),
      ...Object.fromEntries(new FormData(e.target).entries()),
    });
    window.history.pushState({}, "", "/");
    const newPath = new PopStateEvent("navigate");
    window.dispatchEvent(newPath);
  };

  return (
    <form className="border p-4 mt-1" onSubmit={formSubmitHandler}>
      <div className="flex flex-col mb-2">
        <label className="font-bold text-cyan-700" htmlFor="title">
          Title
        </label>
        <input
          className=" p-1 rounded-lg focus:outline-none focus:border-cyan-700 focus:border"
          type="text"
          placeholder="title"
          id="title"
          name="title"
          required
        />
      </div>
      <div className="flex flex-col mb-2">
        <label className="font-bold text-cyan-700" htmlFor="title">
          Action
        </label>
        <input
          className=" p-1 rounded-lg focus:outline-none focus:border-cyan-700 focus:border"
          type="text"
          placeholder="title"
          id="title"
          name="content"
          required
        />
      </div>
      <button
        className=" bg-cyan-700 text-cyan-50 p-2 rounded-xl mt-2 w-fit"
        type="submit"
      >
        Add Todo
      </button>
    </form>
  );
};

export default NewTodo;
