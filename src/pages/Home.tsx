import "../styles/App.css";
import "../styles/index.css";
import React, { useState, useEffect } from "react";
import vibrantPicture from "../assets/vibrantPicture.jpg";
import BarChart from '../components/BarChart';
import MarimekkoChart from "../components/MarimekkoChart";
import Rechart from "../components/ReCharts";
import Chartjs from "../components/Chartjsframwork";

// import { Radar } from "react-chartjs-2";
// import { Chart as ChartJS, RadialLinearScale, CategoryScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from "chart.js";


const Home: React.FC = () => {
  const [topTracks, setTopTracks] = useState<any[]>([]);

  const [userProfile, setUserProfile] = useState<any>(null);

  const [topGenres, setTopGenres] = useState<any[]>([]);

  const [timeRange, setTimeRange] = useState("short_term");

  const [steamid, setSteamId] = useState("");

  const [steamGames, setSteamGames] = useState<any[]>([]);

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
    const fetchSteamGames = async () => {
      try {
        const res = await fetch(`http://localhost:5000/auth/steam-games?steamid=${steamid}`, {
          credentials: "include",
        });
        
        if (!res.ok) throw new Error("Failed to Steam Games");

        const data = await res.json();
        
        console.log("Steam Games", data)
        setSteamGames(data.response?.games || []);
      } catch (error) {
        console.error("Error fetching Steam Games:", error);
      }
    }
    fetchSteamGames();
  }, [steamid]);
  
  // ChartJS.register(
  //   RadialLinearScale, 
  //   CategoryScale, 
  //   BarElement, 
  //   Title, 
  //   Tooltip, 
  //   Legend, 
  //   PointElement, 
  //   LineElement
  // );

//  useEffect(() => {
//   const fetchAudioFeatures = async () => {
//     if (topTracks.length > 0) {
//       setLoading(true);
//       try {
//         const trackIds = topTracks.map((item) => item.id).join(",");
        
//         // Properly encode query params
//         const url = new URL("http://localhost:5000/auth/audio-features");
//         url.searchParams.set("ids", trackIds);

//         const res = await fetch(url.toString(), {
//           credentials: "include",
//         });

//         console.log("Track IDs:", trackIds);
//         if (!res.ok) throw new Error("Failed to fetch audio features");

//         const data = await res.json();
//         setAudioFeatures(data.audio_features);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching audio features:", error);
//         setLoading(false);
//       }
//     }
//   };

//   fetchAudioFeatures();
// }, [topTracks]);

  
  
  

  // Generate chart data only when audioFeatures has data
  // const chartData = audioFeatures.length > 0 ? {
  //   labels: ["Energy", "Danceability", "Valence"],
  //   datasets: [
  //     {
  //       label: "Mood Profile",
  //       data: [
  //         audioFeatures.reduce((acc, cur) => acc + cur.energy, 0) / audioFeatures.length,
  //         audioFeatures.reduce((acc, cur) => acc + cur.danceability, 0) / audioFeatures.length,
  //         audioFeatures.reduce((acc, cur) => acc + cur.valence, 0) / audioFeatures.length,
  //       ],
  //       backgroundColor: "rgba(54, 162, 235, 0.2)",
  //       borderColor: "rgba(54, 162, 235, 1)",
  //       borderWidth: 1,
  //     }
  //   ]
  // } : { labels: [], datasets: [] };

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

  const totalHoursPlayed = steamGames.reduce((sum, game) => {
    return sum + (game.playtime_forever || 0) / 60;
  }, 0);

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
            {topTracks.slice(0, 20).map((track, index) => (
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
                      className="subtitle is-7 mt-2"
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

      <div className="box">
      <h2 className="title is-3 has-text-weight-bold has-text-centered mt-5">
        Want to see how many hours you've wasted on Steam? 👀
      </h2>
      <p className="subtitle is-6 mt-4">Enter your Steam ID below to find out.</p>
        {/* Search Input */}
        <div className="column has-text-centered ">

        <input
          type="text"
          placeholder="Enter your Steam ID"
          value={steamid}
          onChange={(e) => setSteamId(e.target.value)}
          className="input mb-2"
          style={{ width: "300px" }}
          />
          </div>

        {/* Get your time spent playing games on Steam! */}
        <div className="has-text-centered mt-5 mb-5">
          {steamid === "" ? (
            <p className="has-text-grey">Awaiting Steam ID...</p>
          ) : steamGames.length === 0 ? (
            <p className="has-text-grey">No games found for this Steam ID.</p>
          ) : (
            <>
              <p className="title is-2 has-text-danger has-text-weight-bold">
                You’ve wasted {totalHoursPlayed.toFixed(2)} hours on Steam.
              </p>
              <p className="title is-2 has-text-weight-bold mb-5">
                That is approximately {Math.floor(totalHoursPlayed / 24)} days.
              </p>
              <p className="subtitle is-5">Across {steamGames.length} games.</p>
            </>
          )}
        </div>
        

      </div>
{/* 
      Add loading spinner or message
      {loading && <p>Loading your mood profile...</p>}

      <div className="box">
        <div style={{ width: "80%", margin: "auto" }}>
          <h2>Your Music Mood Profile</h2>
          {audioFeatures.length > 0 ? (
            <Radar data={chartData} />
          ) : (
            <p>No data available for mood profile.</p>
          )}
        </div>
      </div> */}
    <div className="box">
        This is a test for the Nivo Bar chart
        <h2>Top 5 Genres</h2>
        <BarChart />
    </div>

    <div className="box">
        This is a test for the Nivo Marimekko chart
      <MarimekkoChart />
    </div>
    
    <div className="box">
        This is a test for the ReCharts Bar chart
      <Rechart />
    </div>

    <div className="box">
        This is a test for the Chart.js Bar chart
      <h2 className="title is-3">342 kWh</h2>
      <h3 className="title is-4">21,08 max / 11,4 gns</h3>
      <Chartjs />
    </div>




    </div>
  );
};

export default Home;
