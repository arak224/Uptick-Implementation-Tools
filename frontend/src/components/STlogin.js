
// Import your image (update the path as necessary)
import STLogo from './st-logo.png';

const STLogin = () => {
    const handleLogin = (event) => {
        event.preventDefault(); // Prevent the default form submission
        // Add your login logic here
    };

    return (
        <div className="bg-[#150824] bg-opacity-40 p-10 rounded-lg w-[600px] mt-8"> 
            <form className="flex flex-col h-auto" onSubmit={handleLogin}>
                <h2 className="text-white font-montserrat text-2xl mb-6 text-center">
                    Enter your <img src={STLogo} alt="Login Icon" className="inline mx-2 p-8" /> login credentials
                </h2>

                {/* Email Input */}
                <div className="mb-6">
                    <label className="block text-white font-montserrat mb-2">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your service trade email"
                        className="w-full p-5 rounded-md bg-[#150824] border border-[#a8acb3] text-white focus:outline-none focus:ring-2 focus:ring-[#ff5002]"
                    />
                </div>

                {/* Password Input */}
                <div className="mb-6">
                    <label className="block text-white font-montserrat mb-2">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your service trade password"
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

                
            </form>
        </div>
    );
}

export default STLogin; // Make sure the export name matches the component name
