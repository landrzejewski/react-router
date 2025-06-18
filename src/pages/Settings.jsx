import React from 'react';

function Settings() {
  return (
    <div className="page">
      <h1>Settings</h1>
      <p>This is a lazily loaded component that only gets loaded when the user navigates to this route.</p>
      
      <div className="settings-section">
        <h2>User Preferences</h2>
        <form>
          <div className="form-group">
            <label htmlFor="theme">Theme:</label>
            <select id="theme" name="theme">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System Default</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="notifications">Notifications:</label>
            <input type="checkbox" id="notifications" name="notifications" />
            <span>Enable push notifications</span>
          </div>
          
          <div className="form-group">
            <label htmlFor="language">Language:</label>
            <select id="language" name="language">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
          
          <button type="button" className="button">Save Settings</button>
        </form>
      </div>
    </div>
  );
}

export default Settings;
