import React from "react";
import { useSelector } from "react-redux";
import { TodoDeleteAlert } from "./todo/TodoDeleteAlert";
import { TodoEditAlert } from "./todo/TodoEditAlert";

const TodoList = () => {
  const todoItems = useSelector((state) => state.todo.value);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10">
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Task Name</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {todoItems.map((item, i) => {
                return (
                  <tr key={i.toString()}>
                    <td>{i}</td>
                    <td>{item}</td>
                    <td>
                      <button
                        onClick={() => TodoEditAlert(i, item)}
                        className="btn btn-warning"
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => TodoDeleteAlert(i)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
