import React from 'react';
import "../styles/App.css";
import "../styles/index.css";

const Home: React.FC = () => {
    return (
        <div className="container" style={{marginTop: '50px'}}>
            <h1 className='h1'>Discover Your Unique Music Taste</h1>
            <h1 className='h1'>Powered by Spotify Data – Directly from the Source</h1>

            <p style={{maxWidth: "42rem", margin: "0 auto", marginTop: "50px"}}>Explore your personalized music preferences and discover the songs and artists that define your taste. All insights are powered by your Spotify listening data, giving you a true reflection of your music journey.</p>
                <div className="column has-text-centered " style={{marginTop: "40px", marginBottom: "40px"}}>
                    <a href="#" className="button is-dark mr-2">Start Here!</a>
                    <a href="#" className="button">Our Features</a>
                </div>
            <div className="box">I'm in a box.</div>
        </div>
    );
};

export default Home;