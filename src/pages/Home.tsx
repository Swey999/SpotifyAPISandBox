import "../styles/App.css";
import "../styles/index.css";
import React, { useState, useEffect } from "react";
import vibrantPicture from "../assets/vibrantPicture.jpg";

const Home: React.FC = () => {
  const [topTracks, setTopTracks] = useState<any[]>([]);

  const [userProfile, setUserProfile] = useState<any>(null);

  const [topGenres, setTopGenres] = useState<any[]>([]);

  const [timeRange, setTimeRange] = useState("short_term");

  // Fetch top tracks data from the backend
  useEffect(() => {
    const fetchTopTracks = async () => {
      try {
        const res = await fetch(`http://localhost:5000/auth/top-tracks?time_range=${timeRange}`, {
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
  }, [timeRange]);

  useEffect(() => {
    const fetchTopGenres = async () => {
      try {
        const res = await fetch("http://localhost:5000/auth/top-genres", {
          credentials: "include",
        });

        if (!res.ok) throw new Error("Failed to fetch tracks");

        const data = await res.json();
        setTopGenres(data.items); // Save the array of top tracks
      } catch (error) {
        console.error("Error fetching top tracks:", error);
      }
    };

    fetchTopGenres();
  }, []);

  const genreCounts = topGenres.reduce(
    (acc: Record<string, number>, artist: any) => {
      artist.genres.forEach((genre: string) => {
        acc[genre] = (acc[genre] || 0) + 1;
      });
      return acc;
    },
    {}
  );

  // Fetch user profile data from the backend
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await fetch("http://localhost:5000/auth/user-Profile", {
          credentials: "include",
        });

        if (!res.ok) throw new Error("Failed to fetch user profile");

        const data = await res.json();
        setUserProfile(data); // Save the user profile data
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <h1 className="h1">Discover Your Unique Music Taste</h1>
      <h1 className="h1">Powered by Spotify Data – Directly from the Source</h1>

      <p style={{ maxWidth: "42rem", margin: "0 auto", marginTop: "50px" }}>
        Explore your personalized music preferences and discover the songs and
        artists that define your taste. All insights are powered by your Spotify
        listening data, giving you a true reflection of your music journey.
      </p>
      <div
        className="column has-text-centered "
        style={{ marginTop: "40px", marginBottom: "40px" }}
      >
        <a href="#" className="button is-dark mr-2">
          Start Here!
        </a>
        <a href="#" className="button">
          Our Features
        </a>
      </div>
      <div className="box">
        <div className="columns is-vcentered">
          {/* Image Section */}
          <div className="column is-half">
            <figure className="image is-4by3">
              <img
                src={vibrantPicture}
                alt="Music Visual"
                style={{
                  objectFit: "cover",

                  width: "100%",
                  height: "100%",
                }}
              />
            </figure>
          </div>

          {/* Text Section */}
          <div className="column is-half ">
            <h2 className="title is-3">
              Explore Your Personalized Music Journey 🎶
            </h2>
            <p className="has-text-left">
              Dive into your unique music taste with insights directly from your
              Spotify data! On this page, you can explore your{" "}
              <strong>Top Tracks</strong> and <strong>Top Genres</strong> for
              the <strong>current month</strong>, all tailored to your listening
              habits.
            </p>
            <br />
            <ul>
              <li>
                <strong>Top Tracks:</strong> Discover your most-played songs
                this month, whether they're chart-toppers or hidden gems.
              </li>
              <li>
                <strong>Top Genres:</strong> See which genres have been
                dominating your playlist and shaping your musical vibe this
                month.
              </li>
            </ul>
            <br />
            <p className="has-text-left">
              Whether you're curious about your latest favorites or want to see
              which genres are defining your musical year, it's all right here,
              powered by your Spotify data.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="box">
        <h2 className="title is-4">Your Profile</h2>
        <ul>
          <li>
            <strong>Name:</strong> {userProfile?.display_name}
          </li>
          <li>
            <strong>Email:</strong> {userProfile?.email}
          </li>
          <li>
            <strong>Country:</strong> {userProfile?.country}
          </li>
          <li>
            <strong>Followers:</strong> {userProfile?.followers.total}
          </li>
          <li>
            <strong>Spotify URL:</strong>{" "}
            <a
              href={userProfile?.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              {userProfile?.external_urls.spotify}
            </a>
          </li>
        </ul>
      </div> */}
      
      <div className="box">
        <h2 className="title is-4">Your Top Genres 🎶</h2>
        <button className="button is-small mb-5">This Month</button>
        <div className="columns is-multiline">
          {Object.entries(genreCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([genre, count], index) => (
              <div className="column is-one-fifth" key={genre}>
                <div className={`box genre-box genre-${index}`}>
                  <p
                    className="has-text-weight-bold has-text-white is-size-5"
                    style={{ textTransform: "capitalize" }}
                  >
                    {genre}
                  </p>
                  <p className="has-text-white is-size-7">
                    {count} artist{count > 1 ? "s" : ""}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="box">
        <h2 className="title is-4">Your Top Tracks 🎧</h2>
        <div className="buttons">
          <button className="button is-small" onClick={() => setTimeRange("short_term")}>This Month</button>
          <button className="button is-small" onClick={() => setTimeRange("medium_term")}>6 Months</button>
          <button className="button is-small" onClick={() => setTimeRange("long_term")}>This Year</button>
        </div>
        {topTracks.length === 0 ? (
          <p>Loading your top songs...</p>
        ) : (
          <div className="columns is-multiline is-mobile hover">
            {topTracks.map((track, index) => (
              <div
                className="column is-one-fifth"
                key={track.id}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  const url = `https://open.spotify.com/track/${topTracks[index].id}`;
                  window.open(url, "_blank");
                }}
              >
                <div
                  className="card"
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    textAlign: "center",
                  }}
                >
                  <div className="card-image">
                    <figure className="image is-square">
                      <img
                        src={track.album.images[0].url}
                        alt={track.name}
                        style={{ objectFit: "cover" }}
                      />
                    </figure>
                  </div>
                  <div className="card-content" style={{ padding: "10px" }}>
                    <p className="title is-6" style={{ fontSize: "0.9rem" }}>
                      {index + 1}. {track.name}
                    </p>
                    <p
                      className="subtitle is-7"
                      style={{
                        fontSize: "0.75rem",
                        overflowWrap: "break-word",
                      }}
                    >
                      {track.artists.map((a: any) => a.name).join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
