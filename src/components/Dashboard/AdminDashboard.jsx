import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Header from '../other/Header';
import { FaTasks, FaChartBar, FaUsers, FaCog } from 'react-icons/fa';
import './AdminDashboard.css';

// Import pages
import TasksPage from '../pages/TasksPage';
import Analytics from '../pages/Analytics';
import Team from '../pages/Team';
import Settings from '../pages/Settings';

const SidebarLink = ({ to, icon: Icon, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    
    return (
        <Link to={to} className={`nav-item ${isActive ? 'active' : ''}`}>
            <Icon className="nav-icon" />
            <span>{children}</span>
        </Link>
    );
};

const AdminDashboard = (props) => {
    return (
        <div className="admin-dashboard">
            <div className="dashboard-container">
                <div className="dashboard-sidebar">
                    <div className="sidebar-header">
                        <h1>EMS Dashboard</h1>
                    </div>
                    <nav className="sidebar-nav">
                        <SidebarLink to="/" icon={FaTasks}>Tasks</SidebarLink>
                        <SidebarLink to="/analytics" icon={FaChartBar}>Analytics</SidebarLink>
                        <SidebarLink to="/team" icon={FaUsers}>Team</SidebarLink>
                        <SidebarLink to="/settings" icon={FaCog}>Settings</SidebarLink>
                    </nav>
                </div>
                
                <div className="dashboard-content">
                    <Header changeUser={props.changeUser} />
                    
                    <div className="content-area">
                        <Routes>
                            <Route path="/" element={<TasksPage />} />
                            <Route path="/analytics" element={<Analytics />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/settings" element={<Settings />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;