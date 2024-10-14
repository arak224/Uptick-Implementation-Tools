import { useLocation, useNavigate } from 'react-router-dom';

const Header = ({ 
    isLoggedIn,
    setIsLoggedIn, 
    username, 
    setUsername, 
    setCompany,
    Company
}) => {

    const printCompany = () => {
        console.log(Company);}

    const navigate = useNavigate();

    const onLoginClick = () => {
        ;;
        navigate('/login')
    };

    const onSignUpClick = () => {
        console.log('Sign up button clicked');
        navigate('/signup')
    };

    const onLogout = () => {
        console.log('User logged out');
        setIsLoggedIn(false);
        setUsername('');
        navigate('/home');
        setCompany('');
    };

    const location = useLocation();

    const handleBackHomeClick = () => {
        if (location.pathname !== '/home') {
            navigate('/home'); 
        } else {
            console.log('Already on homepage');
        }
    };

    return (
        <header className="bg-[rgb(21,8,36)] fixed top-2 left-2 right-2 flex justify-between items-center p-4 rounded-b-lg rounded-t-lg z-10">
            <button 
                onClick={handleBackHomeClick} 
                className='flex items-center space-x-4 bg-[#150824] hover:bg-[#a8acb3] hover:bg-opacity-50 transition border-300 p-2 rounded-md'>
                <img src="https://pdf-background-images.s3.us-east-2.amazonaws.com/logo.png" alt="Logo" className="h-10" />
                <span className='text-white font-montserrat text-lg'>Onboarding Tools</span>
            </button>
            
            <button onClick={printCompany} className="bg-[#2d23e3] hover:bg-[#a8acb3] hover:bg-opacity-50 transition border-300 p-2 rounded-md"></button>

            
            <div className="flex space-x-4">
                {isLoggedIn ? (
                    <>
                        <span className="text-white font-montserrat text-md rounded-md px-3 py-3 shadow-md transition-transform transform">{username}</span>
                        <button 
                            onClick={onLogout} 
                            className="bg-[#ff5002] bg-opacity-80 text-white font-montserrat font-bold px-5 py-3 rounded-md hover:bg-opacity-100 transition">
                            Log Out
                        </button>
                    </>
                ) : (
                    <>
                        <button 
                            onClick={onSignUpClick} 
                            className="bg-[#ff5002] bg-opacity-80 text-white font-montserrat font-bold px-5 py-3 rounded-md hover:bg-opacity-100 transition">
                            Create Account
                        </button>
                        <button 
                            onClick={onLoginClick} 
                            className="bg-[#ff5002] bg-opacity-80 text-white font-montserrat font-bold px-5 py-3 rounded-md hover:bg-opacity-100 transition">
                            Log In
                        </button>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
