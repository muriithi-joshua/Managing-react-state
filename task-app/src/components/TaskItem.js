import React from 'react';

const TaskItem = ({ task, markComplete, editTask, deleteTask }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <button onClick={() => markComplete(task.id)}>Complete</button>
      <button onClick={() => editTask(task)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
