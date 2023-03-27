import React, { useState } from "react";

export const UserDetails = (props) => {
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Age: ${age}, Height: ${height}, Weight: ${weight}`);
        // You can replace console.log with your own logic to process the input data
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Age:
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </label>
            <br />
            <label>
                Height (in cm):
                <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
            </label>
            <br />
            <label>
                Weight (in kg):
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}