import React from "react";
import { TodoType } from "../../types/";
import Todo from "../Todo/Todo";

interface TodoListProps {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  return (
    <div className="todos">
      {todos.map((todo: TodoType) => (
        <Todo todoItem={todo} />
      ))}
    </div>
  );
};

export default TodoList;
