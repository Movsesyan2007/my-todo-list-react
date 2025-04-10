import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import FilterTabs from "./FilterTabs";
import { loadTodos, saveTodos } from "../services/storageService";

const TodoApp = () => {
  const [todos, setTodos] = useState(loadTodos());
  const [activeTab, setActiveTab] = useState("All");
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (title) => {
    if (title.trim()) {
      const newTodo = {
        id: Date.now(),
        title,
        completed: false,
        timestamp: new Date(),
      };
      setTodos([newTodo, ...todos]);
      setNewTodo("");
    }
  };

  const editTodo = (id, newTitle) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    if (window.confirm("you want to delete this todo?")) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filterTodos = () => {
    if (activeTab === "Completed") {
      return todos.filter((todo) => todo.completed);
    }
    if (activeTab === "Not Completed") {
      return todos.filter((todo) => !todo.completed);
    }
    return todos;
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo(newTodo);
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="tekst"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="tekst"
      />
      <button onClick={() => addTodo(newTodo)}>Add Todo</button>

      <FilterTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <TodoList
        todos={filterTodos()}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        toggleCompleted={toggleCompleted}
      />
    </div>
  );
};

export default TodoApp;
