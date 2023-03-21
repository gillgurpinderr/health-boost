import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(pass);
    }

    return (
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name"> Full name: </label>
                <input value={name} name="name" id="name" placeholder="full name" />
                <label htmlfor="email"> Email: </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@address.com" id="email" name="email" />
                <label htmlfor="password"> Password: </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} placeholder="********" id="password" name="password" />
                <button type="submit">LOGIN</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}> Already have an account? Login here. </button>
        </div>
    )
}