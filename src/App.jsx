import "./App.css";
import Input from "./Components/Input";
import Todos from "./Components/Todos";
import { TodoProvider } from "./Context";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <TodoProvider value={{ todos, setTodos }}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-center text-4xl decoration-solid">Todo List!</h1>
          <Input />
          <Todos />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
