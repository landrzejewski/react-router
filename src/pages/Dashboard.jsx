import React from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="page dashboard">
      <h1>Dashboard</h1>
      <p>
        This is a demonstration of nested routes in React Router.
        The content below changes based on the selected tab.
      </p>
      
      <div className="dashboard-container">
        <div className="dashboard-sidebar">
          <h3>Dashboard Navigation</h3>
          <nav>
            <ul>
              <li>
                <NavLink 
                  to="/dashboard" 
                  end
                  className={({ isActive }) => isActive ? "active-link" : ""}
                >
                  Overview
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/dashboard/stats" 
                  className={({ isActive }) => isActive ? "active-link" : ""}
                >
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/dashboard/settings" 
                  className={({ isActive }) => isActive ? "active-link" : ""}
                >
                  Settings
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="dashboard-content">
          {/* Nested routes will render here */}
          <Outlet />
        </div>
      </div>
      
      <Link to="/" className="button">
        Back to Home
      </Link>
    </div>
  );
}

export default Dashboard;
