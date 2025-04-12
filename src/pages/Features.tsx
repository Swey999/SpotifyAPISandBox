import "../styles/App.css";
import "../styles/index.css";
import React from "react";

const Features: React.FC = () => {
  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <h1 className="h1">Features</h1>
      <p style={{ maxWidth: "42rem", margin: "0 auto", marginTop: "20px" }}>
        Dive deeper into the core features of our music insight platform. Each section below is designed to help you better understand your listening habits and discover the soundtrack of your life — all powered by your Spotify data.
      </p>

      {/* Top Tracks Analysis */}
      <div className="box" style={{ marginTop: "40px" }}>
        <h2 className="title is-4">🎧 Top Tracks Analysis</h2>
        <p>
          Ever wonder what songs define your month, your year, or even your music identity? Our Top Tracks Analysis shows you the songs you've had on repeat. Whether it's a global hit or an underground banger, you'll get a personalized list of your most played tracks over different time ranges.
        </p>
        <ul style={{ marginTop: "15px", paddingLeft: "20px" }}>
          <li>🔁 Tracks are updated dynamically from your Spotify account</li>
          <li>📅 Choose between this month, the past 6 months, or your all-time top songs</li>
          <li>🎵 Click any track to instantly open it on Spotify</li>
        </ul>
      </div>

      {/* Genre Breakdown */}
      <div className="box" style={{ marginTop: "30px" }}>
        <h2 className="title is-4">🎵 Genre Breakdown</h2>
        <p>
          Discover the genres that shape your music taste. Whether you’re vibing with Lo-fi one week or jumping into Techno the next, this feature shows which genres are most frequent across your top artists — based on real Spotify data.
        </p>
        <ul style={{ marginTop: "15px", paddingLeft: "20px" }}>
          <li>🎤 Breakdown based on the genres of your top artists</li>
          <li>📈 Genres ranked by how often they appear in your top artists</li>
          <li>🌐 Great way to discover your true musical personality</li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
