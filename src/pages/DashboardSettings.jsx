import React from 'react';

function DashboardSettings() {
  return (
    <div className="dashboard-settings">
      <h2>Settings</h2>
      <p>
        Configure your dashboard settings here.
      </p>
      <form className="settings-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" defaultValue="user123" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Notifications:</label>
          <select id="email" defaultValue="daily">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="never">Never</option>
          </select>
        </div>
        <div className="form-group checkbox">
          <input type="checkbox" id="darkMode" defaultChecked />
          <label htmlFor="darkMode">Dark Mode</label>
        </div>
        <button type="button" className="save-button">
          Save Settings
        </button>
      </form>
      <p>
        This is the third nested route component that appears
        within the Dashboard's Outlet when the "/dashboard/settings" route is accessed.
      </p>
    </div>
  );
}

export default DashboardSettings;
