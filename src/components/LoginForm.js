import React, { useState } from 'react';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ phone: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy login logic
    console.log('Logging in with credentials:', credentials);
    // Redirect to dashboard or handle post-login actions here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="phone"
        value={credentials.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
      />
      <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
