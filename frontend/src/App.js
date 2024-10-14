import React, { useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import AnimatedRoutes from './components/AnimatedRoutes';
import './styles/App.css';

const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [Company, setCompany] = useState('');


    return (
        <div className="min-h-screen bg-gradient-to-b from-[#ff5002] to-[#150824]">
            <Header 
                isLoggedIn={isLoggedIn}
                username={username}
                setIsLoggedIn={setIsLoggedIn}
                setUsername={setUsername}
                setCompany={setCompany}
                Company={Company}

            />
            <div className="pt-20 flex flex-col items-center justify-center min-h-screen"> {/* Add padding to prevent overlap with fixed header */}
                <AnimatedRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} setCompany={setCompany} Company={Company}/>
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
