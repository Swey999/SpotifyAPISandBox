import React from 'react';

const Login: React.FC = () => {
    const handleLogin = () => {
        window.location.href = "http://localhost:5000/auth/spotify"; // Redirect to backend
    };

    return <button onClick={handleLogin}>Login with Spotify</button>;
};

export default Login;