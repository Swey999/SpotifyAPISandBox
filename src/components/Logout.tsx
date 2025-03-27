import React from 'react';

const Logout: React.FC = () => {
    const handleLogout = async () => {
        await fetch("http://localhost:5000/auth/logout", {
            method: "POST",
            credentials: "include",
        });

        window.location.reload(); // Refresh the page after logout
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
