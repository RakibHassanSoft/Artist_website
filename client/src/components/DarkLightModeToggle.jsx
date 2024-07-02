import React, { useState, useEffect } from 'react';

function DarkLightModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Check if dark mode preference is saved in localStorage
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    useEffect(() => {
        // Update localStorage with the current mode
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
        // Apply dark mode if enabled
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const handleModeToggle = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <label className="swap swap-rotate">
            <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
                checked={isDarkMode}
                onChange={handleModeToggle}
            />
            <svg
                className={`swap-off fill-current w-10 h-10 ${isDarkMode ? '' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                {/* Sun icon SVG code */}
            </svg>
            <svg
                className={`swap-on fill-current w-10 h-10 ${isDarkMode ? 'hidden' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                {/* Moon icon SVG code */}
            </svg>
        </label>
    );
}

export default DarkLightModeToggle;
