
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'


const LoginPage = ({ setIsLoggedIn, setUsername, setCompany, Company}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const [companyResponse, setCompanyResponse] = useState('');

    const onLoginSuccess = (userEmail) => {
        setIsLoggedIn(true);
        setUsername(userEmail);
        navigate('/home');
        setCompany(companyResponse);

    }


    const handleLogin = async (event) => {
        event.preventDefault()

        const login_data = {
            'email':email,
            'password':password
        }

        try {
            // Send a POST request to the Django backend
            const response = await fetch('http://127.0.0.1:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(login_data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setErrorMessage(errorData.message);
                return;
            }
            else {
               setCompanyResponse(await response.json('company'));

            onLoginSuccess(email);}

        } catch (error) {
            console.error('Error during signup:', error);
            
        }
    };
    
    

    return (

        <div className='p-4'>
            {errorMessage && (
            <div className="error-message bg-red-500 text-white p-3 rounded-md mt-4">
                {errorMessage}
            </div>
            )}
        
            <div className="bg-[#150824] bg-opacity-40 p-10 rounded-lg w-[600px] mt-8"> 
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
                            onChange={e => {
                                setEmail(e.target.value)
                            }}
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-6">
                        <label className="block text-white font-montserrat mb-2">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full p-5 rounded-md bg-[#150824] border border-[#a8acb3] text-white focus:outline-none focus:ring-2 focus:ring-[#ff5002]"
                            onChange={e => {
                                setPassword(e.target.value)
                            }}
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
                            onClick={() => navigate('/signup')} 
                            className="text-[#ff5002] font-bold hover:underline"
                        >
                            Click here to sign up
                        </button>
                    </p>
                </form>
            </div>
        </div>
       
    );
}

export default LoginPage;
