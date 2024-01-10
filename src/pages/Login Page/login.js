import React, { useState } from "react";
import './login.css';
import { NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Dashboard from '../DashBoard_Page/dashboard'; // Import the Dashboard component

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const history = useHistory(); // Use history for navigation
    const navigate = useNavigate();

    const validateForm = (event) => {
        event.preventDefault();

        // Email and password validation code...
        // Email validation using a simple regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(username)) {
            alert('Please enter a valid email address');
            return;
        }

        // Password validation
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?!.*[^A-Za-z\d@]).{8,}$/;
        if (!passwordRegex.test(password)) {
            alert('Password must contain an uppercase letter, a number, and only allow @ as a special character.');
            return;
        }


        // Check for the specific password to navigate to the dashboard
        if (password === 'SmartServTest@123') {
            // Redirect to the dashboard
            // history.push('/dashboard');
            navigate('/dashboard');

        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

   
    const openEmailClient = () => {
        const subject = 'Password Reset Request';
        const recipient = 'support@smartserv.io';
        const mailtoLink = 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject);
        window.location.href = mailtoLink;
    };

    return (
        <div className="loginpage">
            <div className="login-container">
                <h2>SMARTSEV</h2>
                <form className="login-form" onSubmit={validateForm}>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Email" required />
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                    <button type="submit">Login</button>
                </form>
                <p className="forgot-password" onClick={openEmailClient}>Forgot your password?</p>
            </div>
        </div>
    );
};

export default LoginPage;
