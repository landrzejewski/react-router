import React from 'react';

function DashboardStats() {
  return (
    <div className="dashboard-stats">
      <h2>Statistics</h2>
      <p>
        This page shows detailed statistics for your dashboard.
      </p>
      <div className="stats-container">
        <div className="stats-chart">
          <h3>Monthly Sales</h3>
          <div className="chart-placeholder">
            <div className="bar" style={{ height: '60%' }}></div>
            <div className="bar" style={{ height: '80%' }}></div>
            <div className="bar" style={{ height: '40%' }}></div>
            <div className="bar" style={{ height: '70%' }}></div>
            <div className="bar" style={{ height: '90%' }}></div>
            <div className="bar" style={{ height: '50%' }}></div>
          </div>
          <div className="chart-labels">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
          </div>
        </div>
      </div>
      <p>
        This is another example of a nested route component that appears
        within the Dashboard's Outlet when the "/dashboard/stats" route is accessed.
      </p>
    </div>
  );
}

export default DashboardStats;
