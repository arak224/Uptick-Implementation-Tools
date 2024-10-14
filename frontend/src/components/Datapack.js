import React, { useState } from 'react';
import UploadIcon from '../img/upload-icon.png';

const Datapack = () => {
    const [file, setFile] = useState(null);
    const [dragActive, setDragActive] = useState(false);
    const [placeholder, setPlaceholder] = useState('Drag and drop your file here or click to browse');

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setPlaceholder(selectedFile.name);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragActive(true);
        setPlaceholder("");

    };

    const findDatapack = () => {
        console.log('Finding Datapack');
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setDragActive(false);
        setPlaceholder('Drag and drop your file here or click to browse');
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const droppedFile = e.dataTransfer.files[0];
            setFile(droppedFile);
            setPlaceholder(droppedFile.name);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (file) {
            // Handle file upload logic here
            console.log('File uploaded:', file);
        } else {
            console.log('No file selected');
        }
    };

    return (
        <div className="bg-[#150824] bg-opacity-40 p-10 rounded-lg w-[700px] h-[450px] mt-3 grid grid-rows-7 gap3">
            <h2 className="text-white font-montserrat text-4xl text-center mb-6 row-start-1 row-end-2">Upload Data Template</h2>
            <p className="text-white text-center row-start-2 row-end-2">
                <em>Need a copy?</em>{' '}
                <button
                    href="#"
                    onClick={findDatapack}
                    className="text-[#ff5002] hover:text-[#ff5002] text-ul hover:scale-110 transition-transform p-2 underline"
                >
                    Click here
                </button>
            </p>
            <form className="flex flex-col h-auto row-start-4 row-end-6" onSubmit={handleSubmit}>
                <div
                    className={`mb-6 p-10 border-2 border-dashed rounded ${dragActive ? 'border-[#ff5002]' : 'border-gray-300'} flex items-center justify-center`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <label className="block text-white font-montserrat mb-2 text-center" htmlFor="fileInput">
                        {dragActive ? (
                            <img src={UploadIcon} alt="Upload Icon" className="animate-upload-icon" />
                        ) : (
                            placeholder
                        )}
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                    
                </div>
                <button
                    type="submit"
                    className="bg-gradient-to-r from-[#ff5002] to-[#ff6f00] rounded-lg shadow-lg p-4 flex items-center justify-center hover:shadow-xl transition-transform transform hover:scale-105 text-white text-lg h-10 w-50"
                >
                    Upload
                </button>
            </form>
        </div>
    );
};

export default Datapack;