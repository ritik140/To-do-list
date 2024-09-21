import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../Context";

const Todos = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const Toggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };
  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <ul className="list-none">
      {todos &&
        todos.map((todo) => (
          <div className="flex items-center mb-4">
            <input
              className={`mt-6 shadow appearance-none border rounded-l w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                todo.complete ? "line-through" : ""
              }`}
              id={todo.id}
              type="text"
              value={todo.value}
              placeholder="Enter your Task!"
            />
            <div className="mt-6 flex-shrink-0 flex">
              <img
                src="src/images/check-mark.png" // Replace with your image path
                alt="Icon 1"
                className="p-2 bg-green-500 hover:bg-green-600 border-2 border-green-500 rounded-l h-[55px] w-[3rem] cursor-pointer object-contain" // Adjust height to match input, add margin and cursor
                onClick={() => Toggle(todo.id)}
              />
              <img
                src="src/images/close.png" // Replace with your image path
                alt="Icon 2"
                className="p-2 bg-red-500 hover:bg-red-700 border-red-500 border-2 rounded h-[55px] w-[2.8rem] cursor-pointer object-contain" // Adjust height to match input, add margin and cursor
                onClick={() => deleteTask(todo.id)}
              />
            </div>
          </div>
        ))}
    </ul>
  );
};

export default Todos;
