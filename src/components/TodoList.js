import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, editTodo, deleteTodo, toggleCompleted }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </ul>
  );
};

export default TodoList;
