import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUpForm = ({ setIsLoggedIn }) => { // Receiving setIsLoggedIn from props
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); // State for success message
    const [clients, setClients] = useState([]); // State for storing clients
    const [dropdownVisible, setDropdownVisible] = useState(false); // State for dropdown visibility
    const [filteredClients, setFilteredClients] = useState([]); // State for filtered clients

    const fetchClients = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/get_accounts');
            setClients(response.data);
        } catch (error) {
            console.error('Error fetching clients:', error);
        }
    };

    const handleCompanyFocus = () => {
        if (clients.length === 0) {
            fetchClients();
        }
    };

    const handleCompanyChange = (e) => {
        const input = e.target.value;
        setCompany(input);

        if (input.length >= 3) {
            const filtered = clients.filter(client =>
                client.toLowerCase().includes(input.toLowerCase())
            );
            setFilteredClients(filtered);
            setDropdownVisible(filtered.length > 0);
        } else {
            setDropdownVisible(false);
        }
    };

    const handleClientSelect = (client) => {
        setCompany(client);
        setDropdownVisible(false);
    };

    const placeholders = {
        'First Name': 'Enter first name',
        'Last Name': 'Enter last name',
        'Email': 'Enter email',
        'Company': 'Enter company name',
        'Password': 'Enter your password',
        'Confirm Password': 'Confirm your password'
    };


    const navigate = useNavigate();

    const onSignUpSuccess = () => {
        setSuccessMessage('Signup successful! You can now log in.');
        setTimeout(() => {
            setSuccessMessage('');  // Clear the message after some time
            navigate('/login');     // Redirect to login page
        }, 3000);  // Display the message for 3 seconds
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage('');
    
        // Validate all fields are filled
        if (!firstName || !lastName || !email || !company || !password || !confirmPassword) {
            setErrorMessage('All fields are required.');
            return;
        }
    
        // Validate password match
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }
    
        const userData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            company: company,
            password: password,
        };
    
        try {
            
            const create_response = await fetch('http://127.0.0.1:5000/create_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
    
            // Check if the response is successful
            if (!create_response.ok) {
                const errorData = await create_response.json();
                setErrorMessage(errorData.message || 'An error occurred. Please try again.');
                return;
            }
    
            // Call the success handler
            onSignUpSuccess();

        } catch (error) {
            console.error('Error during signup:', error);
            setErrorMessage('A user with this email already exists. Please log in');
        }
    };

    return (
        
        <div className='p-4'>
            {successMessage && (
            <div className="success-message bg-green-500 text-white p-3 rounded-md mt-4">
                {successMessage}
            </div>
            )}
        
        <div className="bg-[#150824] bg-opacity-40 p-10 rounded-lg w-[600px] mt-8">

            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-8 gap-y-4 max-w-2xl mx-auto">
                <h2 className="col-span-2 text-white font-montserrat text-2xl mb-6 text-center">
                    Create Your Account
                </h2>

                {/* Input fields */}
                {['First Name', 'Last Name', 'Email', 'Company', 'Password', 'Confirm Password'].map((field, index) => {
                    const value = field === 'First Name' ? firstName :
                                  field === 'Last Name' ? lastName :
                                  field === 'Email' ? email :
                                  field === 'Company' ? company :
                                  field === 'Password' ? password :
                                  confirmPassword;

                    return (
                        <div className="mb-2 w-full relative" key={index}>
                            <label className="block text-white font-montserrat mb-2">{field}</label>
                            <input
                                type={field.includes('Password') ? 'password' : 'text'}
                                placeholder={placeholders[field]}
                                value={value}
                                onFocus={field === 'Company' ? handleCompanyFocus : null}
                                onChange={e => {
                                    if (field === 'First Name') setFirstName(e.target.value);
                                    else if (field === 'Last Name') setLastName(e.target.value);
                                    else if (field === 'Email') setEmail(e.target.value);
                                    else if (field === 'Company') handleCompanyChange(e);
                                    else if (field === 'Password') setPassword(e.target.value);
                                    else if (field === 'Confirm Password') setConfirmPassword(e.target.value);
                                }}
                                required
                                className="w-full p-4 rounded-md bg-[#150824] border border-[#a8acb3] text-white focus:outline-none focus:ring-2 focus:ring-[#ff5002] max-w-l"
                            />
                            {field === 'Company' && dropdownVisible && (
                                    <ul className="dropdown absolute bg-[#150824] border border-[#ff5002] text-white w-full mt-1 max-h-40 overflow-y-auto z-10">
                                        {filteredClients.map((client, index) => (
                                            <li key={index} onClick={() => handleClientSelect(client)} className="p-2 cursor-pointer hover:bg-[#ff5002]">
                                                {client}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                        </div>
                    );
                })}

                {/* Error Message */}
                {errorMessage && <div className="col-span-2 text-red-500 text-center mb-4">{errorMessage}</div>}

                {/* Sign Up Button */}
                <button
                    type="submit"
                    className="col-span-2 bg-[#ff5002] text-white font-montserrat font-bold px-4 py-2 rounded-md hover:bg-[#ff6f00] transition"
                > 
                    Sign Up
                </button>
            </form>
        </div>
        </div>
    );
}

export default SignUpForm;
