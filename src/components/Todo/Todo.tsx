import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { TodoType } from "../../types";
import "./Todo.css";

type Props = {
  todoItem: TodoType;
};

const Todo = ({ todoItem }: Props) => {
  return (
    <form className="todos__item">
      <span className="todos__item--text">{todoItem.todo}</span>
      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
        <span className="icon">
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default Todo;
