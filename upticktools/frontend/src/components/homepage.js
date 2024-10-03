const HomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#ff5002] to-[#150824] p-4 flex flex-col justify-center"> {/* Center vertically */}
            {/* Top bar */}
            <div className="bg-[#150824] flex justify-between items-center p-4 rounded-lg">
                <div className='flex items-center space-x-4 bg-[#150824] hover:bg-[#a8acb3] hover:bg-opacity-50 transition border-300 p-2 rounded-md'>
                    <img src="https://pdf-background-images.s3.us-east-2.amazonaws.com/logo.png" alt="Logo" className="h-10" />
                    <span className='text-white font-montserrat text-lg'>Onboarding Tools</span>
                </div>
                <div className="flex space-x-4"> {/* Wrapper for buttons */}
                    <button className="bg-[#a8acb3] bg-opacity-80 text-[#150824] font-montserrat font-bold px-5 py-3 rounded-md hover:bg-opacity-100 transition">
                        Create Account
                    </button>
                    <button className="bg-[#a8acb3] bg-opacity-80 text-[#150824] font-montserrat font-bold px-5 py-3 rounded-md hover:bg-opacity-100 transition">
                        Log In
                    </button>
                </div>
            </div>

            {/* Content Container */}
            <div className="flex justify-center items-center flex-grow"> {/* Allow it to grow and center */}
                <div className="bg-[#150824] bg-opacity-80 p-8 rounded-lg w-full h-4/5 max-w-4xl"> {/* Adjusted width and height */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {/* Tile Example */}
                        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                            <h3 className="text-lg font-montserrat font-bold">Tool 1</h3>
                            <p className="text-gray-600">Description of Tool 1</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                            <h3 className="text-lg font-montserrat font-bold">Tool 2</h3>
                            <p className="text-gray-600">Description of Tool 2</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                            <h3 className="text-lg font-montserrat font-bold">Tool 3</h3>
                            <p className="text-gray-600">Description of Tool 3</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                            <h3 className="text-lg font-montserrat font-bold">Tool 4</h3>
                            <p className="text-gray-600">Description of Tool 4</p>
                        </div>
                        {/* Add more tiles as needed */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;




