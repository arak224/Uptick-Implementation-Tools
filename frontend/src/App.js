import React, { useState } from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import AnimatedRoutes from './components/AnimatedRoutes';
import './styles/App.css';

const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    

    const navigate = useNavigate();

    const onLoginClick = () => {
        console.log('Login button clicked');;
        navigate('/login')
    };

    const onBackHomeClick = () => {
        navigate('/home');
    };

    const onSignUpClick = () => {
        console.log('Sign up button clicked');
        navigate('/signup')
    };

    const onLogout = () => {
        console.log('User logged out');
        setIsLoggedIn(false);
        setEmail('');
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#ff5002] to-[#150824]">
            <Header 
                onLoginClick={onLoginClick}
                onBackHomeClick={onBackHomeClick}
                onSignUpClick={onSignUpClick}
                isLoggedIn={isLoggedIn}
                email={email}
                onLogout={onLogout}
            />
            <div className="pt-20 flex flex-col items-center justify-center min-h-screen"> {/* Add padding to prevent overlap with fixed header */}
                <AnimatedRoutes setIsLoggedIn={setIsLoggedIn} />
            </div>
        </div>
    );
};

// Create a wrapper component to use useNavigate
const AppWrapper = () => {
    return (
        <Router>
            <App />
        </Router>
    );
};

export default AppWrapper;
