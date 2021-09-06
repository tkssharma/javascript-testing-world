import React, { useState } from "react";

function LoginForm({ onSubmit = () => {} }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        username
        <input
          type="email"
          placeholder="user@test.com"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
      </label>
      <label>
        password
        <input
          type="password"
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
        />
      </label>
      <button disabled={!email || !password}>Click</button>
    </form>
  );
}

export default LoginForm;
