import { useState, useEffect } from "react";
function useTodo() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todoInput) =>
    setTodos([...todos, { id: Date.now(), content: todoInput, type: "todo" }]);

  const handleDoClick = (itemId) => {
    const cloneTodos = [...todos];
    const itemIndex = cloneTodos.findIndex((todo) => todo.id === itemId);
    if (todos[itemIndex]) {
      cloneTodos[itemIndex].type = "doing";
    }
    setTodos(cloneTodos);
  };

  const handleDoneClick = (type) => (itemId) => {
    const cloneTodos = [...todos];
    const itemIndex = cloneTodos.findIndex((todo) => todo.id === itemId);
    if (todos[itemIndex]) {
      cloneTodos[itemIndex].type = "done";
    }
    setTodos(cloneTodos);
  };

  // useEffect(() => {
  //   setTodos(JSON.parse(window.localStorage.getItem("todos")) || []);
  // }, [setTodos]);

  // useEffect(() => {
  //   if (todos.length)
  //     window.localStorage.setItem("todos", JSON.stringify(todos));
  // }, [setTodos, todos]);

  const handleTodoClick = (type) => (itemId) => {
    const cloneTodos = [...todos];
    const itemIndex = cloneTodos.findIndex((todo) => todo.id === itemId);
    if (todos[itemIndex]) {
      cloneTodos[itemIndex].type = "todo";
    }
    setTodos(cloneTodos);
  };

  return [
    todos,
    { handleAddTodo, handleTodoClick, handleDoClick, handleDoneClick }
  ];
}

export default useTodo;
