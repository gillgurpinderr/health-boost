import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(pass);
        if (email === 'example@example.com' && pass === 'password123') {
            navigate('/UserDetails');
        } else {
            alert('Invalid email or password');
        }
    };

    return (
        <div className="auth-form-container">
            <h1 className="heading">Login page</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@address.com" id="email" name="email" />
                <label htmlFor="password">Password:</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} placeholder="********" id="password" name="password" />
                <button type="submit">LOGIN</button>
            </form>
            <button className="link-btn" onClick={() => navigate('/register')}>Don't have an account? Register here.</button>
        </div>
    )
}
