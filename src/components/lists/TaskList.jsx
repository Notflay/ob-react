// eslint-disable-next-line import/no-extraneous-dependencies
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import useList from "../../hooks/useList";

const Tasklist = () => {
  const tasks = useList([]);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    tasks.push(newTask);
    setNewTask("");
  };

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  return (
    <div>
      <h1>Task List</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={newTask}
          onChange={handleInputChange}
          placeholder="New Task"
          type="text"
        />
        <button type="submit">Create Task</button>
      </form>
      {tasks.isEmpty() ? (
        <p>Task List is Empty</p>
      ) : (
        <ul>
          {tasks.value.map((task, index) => (
            <li key={index} style={{ padding: "5px", margin: "5px" }} size="sm">
              <Button
                type="button"
                variant="danger"
                onClick={() => tasks.remove(index)}
              >
                X
              </Button>
              <span style={{ marginLeft: "5px" }}>{task}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tasklist;
