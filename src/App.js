import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register"
import { useState } from 'react';
import { UserDetails } from './UserDetails';
function App() {


  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">

      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }

    </div>
  );
}

export default App;
