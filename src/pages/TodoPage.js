import React from "react";
import CreateTodo from "./../components/todo/CreateTodo";
import TodoList from "./../components/TodoList";

const TodoPage = () => {
  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4>My Todo App</h4>
            </div>
            <div className="card-body">
              <CreateTodo />
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
