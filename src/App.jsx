import React, { useState, useEffect } from "react";
import "./App.css";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";
import Canvas from "./components/Canvas";

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  const handleDrop = (e, newStatus) => {
    const taskIndex = e.dataTransfer.getData("index");
    const updatedTasks = tasks.map((task, index) =>
      index === parseInt(taskIndex) ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="app">
      <Canvas setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="To do"
          icon={todoIcon}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        />
        <TaskColumn
          title="Doing"
          icon={doingIcon}
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        />
        <TaskColumn
          title="Done"
          icon={doneIcon}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        />
      </main>
    </div>
  );
};

export default App;
