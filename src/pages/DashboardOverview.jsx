import React from 'react';

function DashboardOverview() {
  return (
    <div className="dashboard-overview">
      <h2>Dashboard Overview</h2>
      <p>
        Welcome to your dashboard! This is the main overview page.
      </p>
      <div className="dashboard-stats-summary">
        <div className="stat-card">
          <h3>Users</h3>
          <p className="stat-number">1,254</p>
        </div>
        <div className="stat-card">
          <h3>Products</h3>
          <p className="stat-number">342</p>
        </div>
        <div className="stat-card">
          <h3>Orders</h3>
          <p className="stat-number">746</p>
        </div>
      </div>
      <p>
        This component demonstrates how nested routes work in React Router.
        It is rendered inside the Dashboard component's Outlet.
      </p>
    </div>
  );
}

export default DashboardOverview;
