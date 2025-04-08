import React from 'react';
import CreateTask from '../other/CreateTask';
import AllTask from '../other/AllTask';
import { FaTasks, FaCheckCircle, FaClock, FaShieldAlt } from 'react-icons/fa';
import './Pages.css';

const TasksPage = () => {
  // Sample task statistics
  const taskStats = {
    total: 46,
    completed: 32,
    pending: 14
  };

  return (
    <div className="page-container">
      <div className="task-header">
        <div className="task-header-left">
          <h1>Task Management</h1>
          <p>Manage and track your team's tasks</p>
        </div>
        <div className="task-stats-compact">
          <div className="stat-mini">
            <FaTasks /> {taskStats.total}
            <span>Total</span>
          </div>
          <div className="stat-mini success">
            <FaCheckCircle /> {taskStats.completed}
            <span>Done</span>
          </div>
          <div className="stat-mini warning">
            <FaClock /> {taskStats.pending}
            <span>Pending</span>
          </div>
        </div>
      </div>

      <div className="task-management-container">
        <div className="create-task-card">
          <div className="card-header">
            <FaShieldAlt className="card-icon" />
            <h2>Create New Task</h2>
          </div>
          <div className="card-body">
            <CreateTask />
          </div>
        </div>
        
        <div className="task-list-card">
          <div className="card-header">
            <FaTasks className="card-icon" />
            <h2>Active Tasks</h2>
          </div>
          <div className="card-body">
            <AllTask />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksPage; 