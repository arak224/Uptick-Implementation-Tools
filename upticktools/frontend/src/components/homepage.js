import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Ensure this is imported
import Header from './Header';
import LoginForm from './LoginForm'; // Ensure you have this component

const ToolButton = ({ label, to }) => (
    <Link to={to}>
        <button className="bg-white bg-opacity-85 rounded-lg shadow-md p-4 flex items-center justify-center hover:bg-opacity-100 transition h-20">
            {label}
        </button>
    </Link>
);

const AvailableTools = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <ToolButton label="US Data Pack Upload" to="/us-data-pack" />
        <ToolButton label="Prep Forms for Uptick" to="/form-prep" />
        <ToolButton label="Map Data from Service Trade" to="/service-trade-export" />
    </div>
);

const HomePage = () => {
    const [isLoginVisible, setIsLoginVisible] = useState(false);
    const [isSlidingOut, setIsSlidingOut] = useState(false);

    const handleLoginClick = () => {
        setIsSlidingOut(true);
        setTimeout(() => {
            setIsLoginVisible(true);
        }, 500); // Match this delay with the animation duration
    };

    const handleBackHomeClick = () => {
        setIsLoginVisible(false);
        setIsSlidingOut(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#ff5002] to-[#150824] p-4 flex flex-col justify-center">
            <Header onLoginClick={handleLoginClick} onBackHomeClick={handleBackHomeClick} />
            
            <motion.div
                initial={{ x: 0, opacity: 1 }}
                animate={isSlidingOut ? { x: '-100%', opacity: 0 } : { x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }} // Exit animation to the right
                transition={{ duration: 0.5 }}
            >
                <section className="flex justify-center h-[70vh]">
                    <div className="content-container bg-[#150824] bg-opacity-40 p-8 rounded-lg w-[100vw] h-full max-w-7xl">
                        <div className="button-container p-8 rounded-lg max-w-4xl flex flex-col items-center justify-center mx-auto absolute left-1/2 transform -translate-x-1/2 bottom-1/3">
                            <h3 className="font-montserrat text-white text-5xl text-center mb-4 py-20">Available Tools</h3>
                            <AvailableTools />
                        </div>
                    </div>
                </section>
            </motion.div>

            {isLoginVisible && (
                <motion.div
                    initial={{ x: '100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: '100%', opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <section className="flex justify-center h-[70vh]">
                        <div className="content-container bg-[#150824] bg-opacity-40 p-8 rounded-lg w-full max-w-md">
                            <LoginForm />
                            <button 
                                onClick={handleBackHomeClick} 
                                className="mt-4 bg-white bg-opacity-80 text-[#150824] font-montserrat font-bold px-5 py-3 rounded-md hover:bg-opacity-100 transition">
                                Back to Home
                            </button>
                        </div>
                    </section>
                </motion.div>
            )}
        </div>
    );
};

export default HomePage;





