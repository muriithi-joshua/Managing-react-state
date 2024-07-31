import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name, description) => {
    const newTask = { id: Date.now(), name, description, completed: false };
    setTasks([...tasks, newTask]);
  };

  const markComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const editTask = (id, name, description) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, name, description } : task));
    setTaskToEdit(null);
  };

  const deleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter(task => task.id !== id));
    }
  };

  return (
    <div className="App">
      <TaskForm
        addTask={addTask}
        editTask={editTask}
        taskToEdit={taskToEdit}
        clearTaskToEdit={() => setTaskToEdit(null)}
      />
      <TaskList
        tasks={tasks}
        markComplete={markComplete}
        editTask={(task) => setTaskToEdit(task)}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
