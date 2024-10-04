const LoginForm = () => {
    return (
        <form className="flex flex-col">
            <div className="mb-4">
                <label className="block text-white font-montserrat mb-2">Email</label>
                <input type="email" placeholder="Enter your email" className="w-full p-3 rounded-md bg-[#150824] border border-[#a8acb3] text-white focus:outline-none focus:ring-2 focus:ring-[#ff5002]" />
            </div>
            <div className="mb-4">
                <label className="block text-white font-montserrat mb-2">Password</label>
                <input type="password" placeholder="Enter your password" className="w-full p-3 rounded-md bg-[#150824] border border-[#a8acb3] text-white focus:outline-none focus:ring-2 focus:ring-[#ff5002]" />
            </div>
        </form>
    );
}

export default LoginForm;
