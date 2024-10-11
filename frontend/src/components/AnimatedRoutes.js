import { motion } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Homepage from './Homepage';
import LoginPage from './LoginPage';
import SignUpForm from './SignUpForm';
import STLogin from './STlogin';

const AnimatedRoutes = ({ setIsLoggedIn }) => {
    const location = useLocation();

    const variants = {
        initial: (direction) => ({
            x: direction > 0 ? 100 : -100, // Slide in from right or left
            opacity: 0,
        }),
        enter: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction < 0 ? 100 : -100, // Slide out to left or right
            opacity: 0,
        }),
    };

    return (
        <Routes location={location} key={location.key}>
            <Route
                path="/home"
                element={
                    <motion.div
                        custom={1}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        variants={variants}
                        transition={{ duration: 0.5 }}
                    >
                        <Homepage />
                    </motion.div>
                }
            />
            <Route
                path="/login"
                element={
                    <motion.div
                        custom={1}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        variants={variants}
                        transition={{ duration: 0.5 }}
                    >
                        <LoginPage />
                    </motion.div>
                }
            />
            <Route
                path="/service-trade-export"
                element={
                    <motion.div
                        custom={1}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        variants={variants}
                        transition={{ duration: 0.5 }}
                    >
                        <STLogin/>
                    </motion.div>
                }
            />
            <Route
                path="/signup"
                element={
                    <motion.div
                        custom={1}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        variants={variants}
                        transition={{ duration: 0.5 }}
                    >
                        <SignUpForm setIsLoggedIn={setIsLoggedIn} />
                        
                    </motion.div>
                }
            />
            <Route path="/" element={<Homepage />} /> {/* Default route */}
        </Routes>
    );
};

export default AnimatedRoutes;
