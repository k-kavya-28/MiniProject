import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import Home from './components/Home';
import HostellerDashboard from './components/HostellerDashboard';
import LaundryStaffDashboard from './components/LaundryStaffDashboard';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = ({ username, userType }) => {
    // You can add authentication logic here
    // For now, we'll just set the user in state
    setUser({ username, userType });
  };

  const handleRegister = ({ username, password }) => {
    // You can add registration logic here
    // For now, we'll just set the user in state
    setUser({ username, userType: 'hosteller' }); // Assuming a new user is always a hosteller
  };

  return (
    <Router>
      <div>
        <h1>Laundry Management System</h1>
        <Switch>
          <Route path="/" exact>
            {user ? <Home /> : <Login userType="hosteller" onLogin={handleLogin} />}
          </Route>
          <Route path="/hosteller-dashboard" component={HostellerDashboard} />
          <Route path="/laundry-staff-dashboard" component={LaundryStaffDashboard} />
        </Switch>
        {!user && (
          <div>
            <Login userType="laundryStaff" onLogin={handleLogin} />
            <Registration onRegister={handleRegister} />
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
