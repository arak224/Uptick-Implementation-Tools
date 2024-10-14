import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';



const ToolButton = ({ label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className = "bg-gradient-to-r from-[#ff5002] to-[#ff6f00] rounded-lg shadow-lg p-4 flex items-center justify-center hover:shadow-xl transition-transform transform hover:scale-105 text-white font-semibold text-lg h-20 w-50"
        >
            {label}
        </button>
    );
};

// Displays available tool buttons
const AvailableTools = ({ isLoggedIn }) => {

    const navigate = useNavigate();

    const handleNavigation = (path) => {

        if (isLoggedIn) {
            navigate(path)
            console.log('loggedin')
        } else {
            navigate('/login')
            console.log('not logged in')
        }

    };

    return(
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-24">
        <ToolButton label="US Data Pack Upload" onClick={() => handleNavigation('/us-data-pack')}/>
        <ToolButton label="Prep Forms for Uptick" onClick={() => handleNavigation('/form-prep')}/>
        <ToolButton label="Map Data from Service Trade" onClick={() => handleNavigation('/service-trade-export')} />
    </div>
);
}

const Homepage = ( { isLoggedIn } ) => {
    return (
        <motion.div
            initial={{ x: 0, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="content-container bg-[#150824] bg-opacity-40 pt-12 pb-8 rounded-lg h-[60vh] w-[80vw] max-w-7xl">
                <div className="button-containe pb-5 vh-[70vh] rounded-lg max-w-4xl flex flex-col items-center justify-center mx-auto">
                    <h3 className="font-montserrat text-white text-5xl text-center mt-14">Available Tools</h3>
                    <AvailableTools isLoggedIn = {isLoggedIn} />
                </div>
            </div>
        </motion.div>
    );
};

export default Homepage;
