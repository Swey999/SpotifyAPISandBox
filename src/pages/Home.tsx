
import "../styles/App.css";
import "../styles/index.css";
import React, { useState, useEffect } from "react";

const Home: React.FC = () => {

    const [topTracks, setTopTracks] = useState<any[]>([]);

    // Fetch top tracks data from the backend
    useEffect(() => {
      const fetchTopTracks = async () => {
        try {
          const res = await fetch("http://localhost:5000/auth/top-tracks", {
            credentials: "include",
          });
  
          if (!res.ok) throw new Error("Failed to fetch tracks");
  
          const data = await res.json();
          setTopTracks(data.items); // Save the array of top tracks
        } catch (error) {
          console.error("Error fetching top tracks:", error);
        }
      };
  
      fetchTopTracks();
    }, []);




    return (
        <div className="container" style={{marginTop: '50px'}}>
            <h1 className='h1'>Discover Your Unique Music Taste</h1>
            <h1 className='h1'>Powered by Spotify Data – Directly from the Source</h1>

            <p style={{maxWidth: "42rem", margin: "0 auto", marginTop: "50px"}}>Explore your personalized music preferences and discover the songs and artists that define your taste. All insights are powered by your Spotify listening data, giving you a true reflection of your music journey.</p>
                <div className="column has-text-centered " style={{marginTop: "40px", marginBottom: "40px"}}>
                    <a href="#" className="button is-dark mr-2">Start Here!</a>
                    <a href="#" className="button">Our Features</a>
                </div>
            <div className="box">I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.I'm in a box.</div>
        
            <div className="box">
        <h2 className="title is-4">Your Top Tracks 🎧</h2>
        {topTracks.length === 0 ? (
          <p>Loading your top songs...</p>
        ) : (
          <ul>
            {topTracks.map((track, index) => (
              <li key={track.id} style={{ marginBottom: "10px" }}>
                <strong>
                  {index + 1}. {track.name}
                </strong>{" "}
                by {track.artists.map((a: any) => a.name).join(", ")}
              </li>
            ))}
          </ul>
        )}
      </div>
        
        
        
        
        </div>
        
    );
};

export default Home;