import React, { useContext, useState } from "react";
import { TodoContext } from "../Context";

const Input = () => {
  const [input, setInput] = useState("");
  const { setTodos } = useContext(TodoContext);
  const handlerSubmit = (event) => {
    event.preventDefault();
    const newTodo={id:Date.now(),value:input,complete:false}
    setTodos((prev) => [newTodo, ...prev]);
    setInput("");
  };
  return (
    <form onSubmit={handlerSubmit}>
      <div className="flex items-center mb-4">
        <input
          className="mt-6 shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={Date.now()}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your Task!"
        />
        <button
          className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default Input;
