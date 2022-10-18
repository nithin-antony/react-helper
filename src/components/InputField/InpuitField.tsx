import React, { useRef } from "react";
import "./InpuitField.css";

type InputFieldProps = {
  todo: string;
  setTodo: Function; // React.Dispatch<React.SetStateAction<string>>
  addTodoHandler: (evt: React.FormEvent) => void;
};

//const InpuitField: React.FC<InputFieldProps> = ({ todo, setTodo }) => { // optional one
const InpuitField = ({ todo, setTodo, addTodoHandler }: InputFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(evt) => {
        addTodoHandler(evt);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        value={todo}
        onChange={(evt) => {
          setTodo(evt.target.value);
        }}
        placeholder="Enter a task"
        className="input__box"
      />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InpuitField;
