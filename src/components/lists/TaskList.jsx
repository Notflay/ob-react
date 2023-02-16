// eslint-disable-next-line import/no-extraneous-dependencies
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import useList from "../../hooks/useList";

/**
 * Componente que gestiona la lista de tareas
 * v2: la nueva tarea se añade para ver si está completada
 * @returns {React.component}
 */

const Tasklist = () => {
  const tasks = useList([]);
  const [newTask, setNewTask] = useState("");

  /**
   * Añade una nueva tarea a la lista
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    tasks.push(newTask);
    setNewTask("");
    return true;
  };

  /**
   * Función para chequear si la lista de tareas está vacía
   * @returns true si taskList.length === 0;
   */
  const isTaskEmpty = () => tasks.length === 0;

  /**
   * Editar el nombre de la nueva tarea
   * @param {*} e - Evento de onchange proveniente de React
   */
  const editeNewItem = (e) => setNewTask(e.target.value);

  /**
   * Función para eliminar de una tarea en concreto
   * @param {*} index -- Indice de la tarea a eliminar
   */
  const removeItem = (index) => {
    tasks.remove(index);
  };

  /**
   * Cambia al estado de la tarea segun la posicion
   * @param {*} index Posicion de la tarea
   */
  const changeItem = (index) => {
    tasks.change(index);
  };

  /**
   * Función para cambiar el estado del NewTak con lo que digites
   * @param {*} event Valor del input
   */
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  return (
    <div>
      <h1>Task List</h1>
      <form onSubmit={handleSubmit}>
        <input
          onKeyDown={(e) => e.key === "Enter" && handleSubmit}
          className="input"
          onChange={handleInputChange}
          value={newTask}
          placeholder="New Task"
          type="text"
        />
        <button className="btn" type="submit">
          Create Task
        </button>
      </form>
      {tasks.isEmpty() ? (
        <p>Task List is Empty</p>
      ) : (
        <div>
          <ul>
            {tasks.value.map((task, index) => (
              <li
                key={index}
                style={{ padding: "5px", margin: "5px" }}
                size="sm"
              >
                <Button
                  type="button"
                  variant="danger"
                  onClick={() => changeItem(index)}
                >
                  X
                </Button>
                <span
                  style={{
                    marginLeft: "5px",
                    textDecoration: task.completed ? "line-through" : null,
                  }}
                >
                  {task.task}
                </span>
              </li>
            ))}
          </ul>
          <button type="button" onClick={tasks.clear}>
            Eliminar
          </button>
          <button type="button" onClick={tasks.orden}>
            Ordenar
          </button>
          <button type="button" onClick={tasks.invert}>
            Invertir
          </button>
        </div>
      )}
    </div>
  );
};

export default Tasklist;
