import React, { useState } from "react";
import "./UserDetails.css";
// import { useHistory } from "react-dom";
import { useNavigate } from 'react-router-dom';


export const UserDetails = (props) => {
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [gender, setGender] = useState("male");
    const [activityLevel, setActivityLevel] = useState("sedentary");
    const [goal, setGoal] = useState("maintain");
    const [currentCalories, setCurrentCalories] = useState(null);
    const [recommendedCalories, setRecommendedCalories] = useState(null);
    const [bmi, setBmi] = useState(null);
    // const history = useHistory();
    const navigate = useNavigate();
    const [isCalculated, setIsCalculated] = useState(false);


    const calculateBmi = () => {
        const heightInMeters = height / 100;
        const bmiValue = weight / (heightInMeters * heightInMeters);
        setBmi(bmiValue.toFixed(2));
    };

    const calculateCurrentCalories = () => {
        const bmr =
            gender === "male"
                ? 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age
                : 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
        const activityMultiplier = {
            sedentary: 1.2,
            light: 1.375,
            moderate: 1.55,
            very: 1.725,
            extra: 1.9,
        }[activityLevel];
        const currentCaloriesValue = Math.round(bmr * activityMultiplier);
        setCurrentCalories(currentCaloriesValue);
    };

    const calculateRecommendedCalories = () => {
        const weightChangePerWeek = {
            maintain: 0,
            lose: -0.5,
            gain: 0.5,
        }[goal];
        const caloriesPerDayChange = weightChangePerWeek * 3500 / 7;
        const recommendedCaloriesValue = Math.round(currentCalories + caloriesPerDayChange);
        setRecommendedCalories(recommendedCaloriesValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        calculateBmi();
        calculateCurrentCalories();
        calculateRecommendedCalories();
        setIsCalculated(true);
    };

    const handlePlanSubmit = (e) => {
        e.preventDefault();
        navigate("/plans");
    };

    return (
        <div className="user-form-container">
            <h1 className="heading">Calorie Calculator</h1>
            <form className="user-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Age:</label>
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Gender:</label>
                    <div className="radio-group">
                        <div>
                            <input
                                type="radio"
                                id="male"
                                name="gender"
                                value="male"
                                checked={gender === "male"}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="female"
                                name="gender"
                                value="female"
                                checked={gender === "female"}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Height (in cm):</label>
                    <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Weight (in kg):</label>
                    <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Activity Level:</label>
                    <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
                        <option value="sedentary">Sedentary</option>
                        <option value="light">Lightly Active</option>
                        <option value="moderate">Moderately Active</option>
                        <option value="very">Very Active</option>
                        <option value="extra">Extra Active</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Goal:</label>
                    <select value={goal} onChange={(e) => setGoal(e.target.value)}>
                        <option value="maintain">Maintain Weight</option>
                        <option value="lose">Lose Weight</option>
                        <option value="gain">Gain Weight</option>
                    </select>
                </div>
                <button type="submit">Calculate</button>
            </form>

            {bmi && (
                <div className="result-container">
                    <h2>BMI: {bmi}</h2>
                </div>
            )}

            {currentCalories && recommendedCalories && (
                <div className="result-container">
                    <h2>Current Calorie Intake: {currentCalories}</h2>
                    <h2>Recommended Calorie Intake: {recommendedCalories}</h2>
                </div>
            )}

            {isCalculated ? (
                <button onClick={() => navigate('/UserDetails')}>Reset</button>
            ) : (
                <button className="Continue-btn" onSubmit={handlePlanSubmit} onClick={() => navigate('/plans')}> Continue </button>
            )}

        </div>
    );
};
