import React, { useState } from "react";
import "./App.css";
import InpuitField from "./components/InputField";
import TodoList from "./components/TodoList";
import { TodoType } from "./types";
//import Bascis from "./Bacics";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoType[]>([]);
  const addTodoHandler = (evt: React.FormEvent) => {
    evt.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isCompleted: false }]);
      setTodo("");
    }
  };
  return (
    <div className="app">
      <span className="heading">Taskify</span>
      <InpuitField
        todo={todo}
        setTodo={setTodo}
        addTodoHandler={addTodoHandler}
      />
      <div>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default App;
