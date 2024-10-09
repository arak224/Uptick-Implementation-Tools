import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';

const LoginPage = () => {
    const [isSliding, setIsSliding] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault(); // Prevent page refresh
        setIsSliding(true);
        // Your login logic can go here
        setTimeout(() => {
            // Redirect to home or another page if necessary
        }, 500);
    };

    return (
        <motion.div
            initial={{ x: 0 }}
            animate={isSliding ? { x: 100, opacity: 0 } : { x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gradient-to-b from-[#ff5002] to-[#150824] p-4 flex flex-col justify-center items-center"
        >
            <Header />
            <div className="bg-[#150824] bg-opacity-40 p-10 rounded-lg w-[600px] mt-8"> {/* Single container for the form */}
                <form className="flex flex-col h-auto" onSubmit={handleLogin}>
                    <h2 className="text-white font-montserrat text-2xl mb-6 text-center">
                        Enter Login Credentials
                    </h2>

                    {/* Email Input */}
                    <div className="mb-6">
                        <label className="block text-white font-montserrat mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-5 rounded-md bg-[#150824] border border-[#a8acb3] text-white focus:outline-none focus:ring-2 focus:ring-[#ff5002]"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-6">
                        <label className="block text-white font-montserrat mb-2">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full p-5 rounded-md bg-[#150824] border border-[#a8acb3] text-white focus:outline-none focus:ring-2 focus:ring-[#ff5002]"
                        />
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="submit"
                        className="bg-[#ff5002] text-white font-montserrat font-bold px-4 py-2 rounded-md hover:bg-[#ff6f00] transition mb-4"
                    >
                        Sign In
                    </button>

                    {/* Sign Up Link */}
                    <p className="text-white text-center">
                        No account?{' '}
                        <button 
                            onClick={() => console.log('Sign Up Clicked')} 
                            className="text-[#ff5002] font-bold hover:underline"
                        >
                            Click here to sign up
                        </button>
                    </p>
                </form>
            </div>
        </motion.div>
    );
}

export default LoginPage;
