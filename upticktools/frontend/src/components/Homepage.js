import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import { Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUpForm from './SignUpForm';

// Button component for tools navigation
const ToolButton = ({ label, to }) => (
    <Link to={to}>
        <button className="bg-white bg-opacity-85 rounded-lg shadow-md p-10 flex items-center justify-center hover:bg-opacity-100 transition h-20 w-50">
            {label}
        </button>
    </Link>
);

// Displays available tool buttons
const AvailableTools = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-24">
        <ToolButton label="US Data Pack Upload" to="/us-data-pack" />
        <ToolButton label="Prep Forms for Uptick" to="/form-prep" />
        <ToolButton label="Map Data from Service Trade" to="/service-trade-export" />
    </div>
);

const Homepage = () => {
    const [isLoginVisible, setIsLoginVisible] = useState(false);
    const [isSignUpVisible, setIsSignUpVisible] = useState(false);
    const [isSlidingOut, setIsSlidingOut] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [notification, setNotification] = useState('');
    const [userEmail, setUserEmail] = useState(''); 

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserEmail('');
    };

    const handleLoginClick = () => {
        setIsSlidingOut(true);
        setTimeout(() => {
            setIsLoginVisible(true);
            setIsSignUpVisible(false);
        }, 500);
    };

    const handleSignUpClick = () => {
        setIsSlidingOut(true);
        setTimeout(() => {
            setIsSignUpVisible(true);
            setIsLoginVisible(false);
        }, 500);
    };

    const handleSignUpSuccess = () => {
        setNotification('Account created successfully!');
        setTimeout(() => {
            setNotification('');
            handleBackHomeClick(); 
        }, 2500);
    };

    const handleBackHomeClick = () => {
        setIsLoginVisible(false);
        setIsSignUpVisible(false);
        setIsSlidingOut(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#ff5002] to-[#150824] p-4 flex flex-col justify-center">
            <Header 
                onLoginClick={handleLoginClick} 
                onBackHomeClick={handleBackHomeClick} 
                onSignUpClick={handleSignUpClick}
                isLoggedIn={isLoggedIn} 
                email={userEmail} 
                onLogout={handleLogout}
            />

            {/* Notification Message */}
            {notification && (
                <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-md mb-4 z-10">
                    {notification}
                </div>
            )}

            <motion.div
                initial={{ x: 0, opacity: 1 }}
                animate={isSlidingOut ? { x: '-100%', opacity: 0 } : { x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <section className={`flex justify-center ${isLoginVisible || isSignUpVisible ? 'hidden' : 'h-[70vh]'}`}>
                    <div className="content-container bg-[#150824] bg-opacity-40 pt-12 pb-8 rounded-lg w-[80vw] max-w-7xl">
                        <div className="button-container p-8 rounded-lg max-w-4xl flex flex-col items-center justify-center mx-auto">
                            <h3 className="font-montserrat text-white text-5xl text-center mt-14">Available Tools</h3>
                            <AvailableTools />
                        </div>
                    </div>
                </section>
            </motion.div>

            {/* Login Form */}
            {isLoginVisible && (
                <motion.div
                    initial={{ x: '100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: '100%', opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <section className="flex justify-center h-[70vh]">
                        <div className="bg-[#150824] bg-opacity-40 p-8 rounded-lg w-[80vw] max-w-md flex items-center justify-center">
                            <LoginPage onSignUpClick={handleSignUpClick} />
                        </div>
                    </section>
                </motion.div>
            )}

            {/* Sign Up Form */}
            {isSignUpVisible && (
                <motion.div
                    initial={{ x: '100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: '100%', opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <section className="flex justify-center h-[70vh]">
                        <div className="bg-[#150824] bg-opacity-40 p-5 rounded-lg w-[800px] flex items-center justify-center">
                            <SignUpForm onSignUpSuccess={handleSignUpSuccess} />
                        </div>
                    </section>
                </motion.div>
            )}
        </div>
    );
};

export default Homepage;
