import React, { useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import AnimatedRoutes from './components/AnimatedRoutes';
import './styles/App.css';

const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [Company, setCompany] = useState('');
    const [fixedHeader, setFixedHeader] = useState(true);
    


    return (
        <div className="min-h-screen bg-gradient-to-b from-[#ff5002] to-[#150824]">
            {fixedHeader && (
                <Header 
                    isLoggedIn={isLoggedIn}
                    username={username}
                    setIsLoggedIn={setIsLoggedIn}
                    setUsername={setUsername}
                    setCompany={setCompany}
                    Company={Company}
                    fixedHeader={fixedHeader}
                />
            )}
            <div className="pt-20 flex flex-col items-center justify-center min-h-screen"> 
                <AnimatedRoutes 
                isLoggedIn={isLoggedIn} 
                setIsLoggedIn={setIsLoggedIn} 
                setUsername={setUsername} 
                setCompany={setCompany} 
                Company={Company} 
                setFixedHeader={setFixedHeader}/>
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
