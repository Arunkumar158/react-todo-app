import React, { useState } from 'react';
import { db, auth } from './firebase'; // Ensure Firebase is initialized

const AddTask = () => {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [dueTime, setDueTime] = useState('');
  const [priority, setPriority] = useState('Low');
  const [category, setCategory] = useState('Work');
  const [status, setStatus] = useState(false);

  const handleAddTask = async (e) => {
    e.preventDefault();
    
    const user = auth.currentUser;
    if (user) {
      try {
        await db.collection('tasks').add({
          text,
          dueDate,
          dueTime,
          priority,
          category,
          userId: user.uid, // Link task to user
          status
        });
        // Clear input fields after adding task
        setText('');
        setDueDate('');
        setDueTime('');
        setPriority('Low');
        setCategory('Work');
        setStatus(false);
      } catch (error) {
        console.error('Error adding task:', error);
      }
    } else {
      console.error('No user is signed in.');
    }
  };

  return (
    <div>
      <h2>Add a New Task</h2>
      <form onSubmit={handleAddTask}>
        <input 
          type="text" 
          placeholder="Task description" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
        />
        <input 
          type="date" 
          value={dueDate} 
          onChange={(e) => setDueDate(e.target.value)} 
        />
        <input 
          type="time" 
          value={dueTime} 
          onChange={(e) => setDueTime(e.target.value)} 
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Shopping">Shopping</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;