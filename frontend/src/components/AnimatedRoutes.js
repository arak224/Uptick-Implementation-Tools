import { motion } from 'framer-motion';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'; // Import useEffect for managing header state
import Homepage from './Homepage';
import LoginPage from './LoginPage';
import SignUpForm from './SignUpForm';
import STLogin from './STlogin';
import Datapack from './Datapack';
import Joyfill from './JoyfillEditor';
import { Navigate } from 'react-router-dom';
import TemplateUpload from './TemplateUpload';

const AnimatedRoutes = ({ isLoggedIn, setIsLoggedIn, setUsername, setCompany, Company, setFixedHeader }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [desiredPath, setDesiredPath] = useState('');

    useEffect(() => {
        if (location.pathname === '/form-prep/edit') {
            setFixedHeader(false);  
        } else {
            setFixedHeader(true);  
        }
    }, [location.pathname, setFixedHeader]);

    useEffect(() => {
        if (!isLoggedIn && location.pathname !== '/login' && location.pathname !== '/signup' && location.pathname !== '/home') {
            setDesiredPath(location.pathname);
            navigate('/login');
        }
    }, [isLoggedIn, location, navigate]);
    
    useEffect(() => {
        if (isLoggedIn && desiredPath) {
            navigate(desiredPath);
            setDesiredPath('');
        }
    }, [isLoggedIn, desiredPath, navigate]);


        
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
        <Routes location={location} key={location.pathname}>
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
                        <Homepage Company={Company}/>
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
                        <LoginPage setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} setCompany={setCompany} Company={Company} desiredPath={desiredPath} />
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
                        <STLogin />
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
            <Route
                path="/us-data-pack"
                element={
                    <motion.div
                        custom={1}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        variants={variants}
                        transition={{ duration: 0.5 }}
                    >
                        <Datapack />
                    </motion.div>
                }
            />
            <Route
                path="/form-prep"
                element={
                    <motion.div
                        custom={1}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        variants={variants}
                        transition={{ duration: 0.5 }}
                    >
                        <TemplateUpload />
                    </motion.div>
                }
            />
            <Route
                path="/form-prep/edit"
                element={
                    <motion.div
                        custom={1}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        variants={variants}
                        transition={{ duration: 0.5 }}
                    >
                        <Joyfill />
                    </motion.div>
                }
            />
            <Route path="/" element={<Navigate to="/home" />} /> {/* Redirect root to /home */}
        </Routes>
    );
};

export default AnimatedRoutes;
