import React from 'react';
import AddTask from './AddTask'; // Import your AddTask component
import TaskList from './TaskList'; // Import the component where tasks are listed

const TaskManager = () => {
  return (
    <div>
      <AddTask />
      <TaskList /> {/* This component will display the list of tasks */}
    </div>
  );
};

export default TaskManager;