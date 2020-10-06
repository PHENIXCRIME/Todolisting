import React from "react";
import Input from "./.components/Input";
import Lane from "./.components/Lane";
import Title from "./.components/Title";
import { useTodo } from "./contexts/ActionContext";
import "./main.css";

export default function App() {
  const [, { handleAddTodo }] = useTodo();

  // const handleAddTodo = (todoInput) =>
  //     setTodos([...todos, {id : Date.now() ,content :todoInput ,type : "todo"}]);

  return (
    <div className="container">
      <Title>Title</Title>
      <Input onSubmit={handleAddTodo} />
      <Lane />
    </div>
  );
}
