import React, { useState } from "react";
import { navigate } from "react-dom";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(pass);
    console.log(name);
    navigate("/user-details"); // navigate to UserDetails page
  };

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="auth-form-container">
      <h1 className="heading">Sign Up</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          id="name"
          placeholder="full name"
        />
        <label htmlFor="email">Email:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@address.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password:</label>
        <div className="password-input">
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="********"
            id="password"
            name="password"
            type={showPass ? "text" : "password"}
          />
          <button type="button" onClick={handleShowPass}>
            {showPass ? "Hide" : "Show"}
          </button>
        </div>
        <button type="submit">REGISTER</button>
      </form>
      <button className="link-btn" onClick={() => navigate("/login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};
