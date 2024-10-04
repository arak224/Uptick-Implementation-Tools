import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './Header'; // Adjust the import path as needed
import LoginForm from './LoginForm'; // Adjust the import path as needed

const LoginPage = () => {
    const [isSliding, setIsSliding] = useState(false);

    const handleLogin = () => {
        setIsSliding(true);
        setTimeout(() => {
            // Redirect or perform login logic here
            // e.g., navigate('/home') if using useNavigate
        }, 500); // Match this delay with the animation duration
    };

    return (
        <motion.div
            initial={{ x: 0 }}
            animate={isSliding ? { x: 100, opacity: 0 } : { x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gradient-to-b from-[#ff5002] to-[#150824] p-4 flex flex-col justify-center"
        >
            <Header />
            <section className="flex flex-grow justify-center items-center">
                <div className="content-container bg-[#150824] bg-opacity-40 p-10 rounded-lg w-[600px]">
                    <LoginForm />
                    <button onClick={handleLogin} className='bg-[#150824] text-white px-4 py-2 rounded-md mt-4'>
                        Log In
                    </button>
                </div>
            </section>
        </motion.div>
    );
}

export default LoginPage;


