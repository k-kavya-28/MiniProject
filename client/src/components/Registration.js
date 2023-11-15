import React, { useState } from 'react';

const Registration = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Add validation or registration logic here
    // For now, just pass the username and password to the parent component
    onRegister({ username, password });
  };

  return (
    <div>
      <h2>Registration</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Registration;
