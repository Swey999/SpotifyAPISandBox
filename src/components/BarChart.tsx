// BarChart.js
import { ResponsiveBar } from '@nivo/bar';
import React, { useEffect, useState } from 'react';



const BarChart: React.FC = () => {

const data = [
  { country: 'USA', sales: 100 },
  { country: 'UK', sales: 80 },
  { country: 'Germany', sales: 90 },
]


  const [topGenres, setTopGenres] = useState<any[]>([]);

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

  const genreData = Object.entries(genreCounts).sort((a, b) => b[1] - a[1]).map(([genre, count]) => ({
    genre,
    count,
  })).slice(0, 5); // Get top 10 genres

  
return(
  <div style={{ height: 400 }}>
    <ResponsiveBar
      data={genreData}
      keys={['count']}
      indexBy="genre"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={(d) => {
        // Dynamically assign colors based on the index or some property of the data
        const colors = ['#ff6b6b', '#feca57', '#1dd1a1', '#54a0ff', '#a29bfe'];
        return colors[d.index % colors.length]; // Use the modulus operator to loop through the colors
      }}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Genres',
        legendPosition: 'middle',
        legendOffset: 40
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Count',
        legendPosition: 'middle',
        legendOffset: -50
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      animate={true}
      motionConfig="wobbly"
      theme={{
        axis: {
          ticks: {
            text: {
              fontFamily: 'Inter, sans-serif', // Change the font of the axis ticks
              fontSize: 14,
            },
          },
          legend: {
            text: {
              fontFamily: 'Inter, sans-serif', // Change the font of the axis legend
              fontSize: 16,
            },
          },
        },
        labels: {
          text: {
            fontFamily: 'Inter, sans-serif', // Change the font of the labels
            fontSize: 14,
          },
        },
      }}
    />
  </div>
);
};

export default BarChart
