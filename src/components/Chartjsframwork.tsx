import { Bar } from "react-chartjs-2";
import React, { useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Ticks,
} from "chart.js";

const MyChart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  // Hvis du ikke returnerer noget, får du fejlen:
  // Der mangler et return statement med JSX

  // Create an array of days for a month (1 to 31)
  const daysOfMonth = Array.from({ length: 31 }, (_, i) => (i + 1).toString());

  // Example data for each day (replace this with your actual data)
  const dataValues = new Array(21)
    .fill(0)
    .map(() => Math.floor(Math.random() * 21)); // Random data for example

  const data = {
    labels: daysOfMonth, // Days 1 to 31 as labels on the X-axis
    datasets: [
      {
        label: "kWh",
        data: dataValues, // Replace this with actual kWh data per day
        backgroundColor: "#3FD595",
        borderColor: "#3FD595",
        borderWidth: 1,
        barThickness: 36, // Set the thickness of the bars
        maxBarThickness: 36, // Set the maximum thickness of the bars
      },
    ],
  };

  const options = {
    responsive: true,
    devicePixelRatio: window.devicePixelRatio * 2, // Double the resolution
    plugins: {
      legend: {
        display: false, // Set to false to hide the legend

        position: "top" as const, // Set the legend position
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: true,
          lineWidth: 1, // Control the width of grid lines
          drawTicks: false, // Remove tick marks from the grid
          color: "rgba(200, 200, 200, 0.7)",
        },
        ticks: {
          autoSkip: false, // Don't skip any ticks (show all days)
          font: {
            size: 16, // Increase the font size for X-axis numbers
          },
          padding: 10,
          display: true,
          tickLength: 0, // Removes the tick line for the x-axis
        },
        categoryPercentage: 0.6, // Reduce spacing between bars (default is 0.8, try lower)
        barPercentage: 0.9, // Adjust the bar's width relative to available space (default is 1)
        // Optional: Use maxBarThickness to limit the width of the bars
        maxBarThickness: 20, // Set maximum thickness of the bars
        indexAxis: "x", // Ensure bars are placed horizontally (X-axis)
      },
      y: {
        beginAtZero: true,
        borderWidth: 5, // Adjust the border width of the Y-axis to make it more defined
        grid: {
          display: true,
          color: "rgba(200, 200, 200, 0.7)",
          drawTicks: false, // Remove tick marks from the grid
        },
        ticks: {
          font: {
            size: 16, // Increase the font size for X-axis numbers
          },
          padding: 10,
          // This will hide the tick line (the little line that sticks out)
          display: true,
          // To remove the line, you can set tickSize to 0 or remove it altogether
          // You can set it to 0 to hide the little line
          tickLength: 0, // Removes the tick line for the x-axis
        },
        title: {
          display: true,
          text: "kWh", // Custom label on the Y-axis
          font: {
            size: 20, // Increase font size if necessary for clarity
            weight: "normal" as const,
            family: "Arial, sans-serif", // Use a system font or a custom font
          },
          color: "#333",
        },
      },
    },
  };

  return (
    <div>
      
      <div className="buttons is-centered-left mb-1">
        <button className="button">BakkeVænget 15, 8900 Randers</button>
      </div>

      <Bar data={data} options={options} height={100} />

      <div className="buttons is-centered-left mt-4">
        <button className="button">1d</button>
        <button className="button">1u</button>
        <button className="button">1m</button>
        <button className="button">1å</button>
        <button className="button">Max</button>







        <div className="buttons has-addons is-centered" style={{ marginTop: "23px" }}>
          <button className="button has-addons is-centered">
            <span className="icon">
              <i className="fas fa-chevron-left"></i>
            </span>
          </button>

          <button className="button is-static">April 2025</button>

          <button className="button">
            <span className="icon">
              <i className="fas fa-chevron-right"></i>
            </span>
          </button>
        </div>


        <span style={{ marginBottom: "10px", display: 'flex', alignItems: 'center', marginLeft: 'auto'}}>Sammenlign med sidste år</span>
        <label className="switch" style={{ marginBottom: "10px", display: 'flex', alignItems: 'center'}}>
          <input type="checkbox" checked={isChecked} onChange={handleToggle}              style={{
        width: '0', // Skjul den oprindelige checkbox
        height: '0',
        opacity: '0',
      }}/>
    <span
      style={{
        width: '40px', // Størrelsen af sliderens baggrund
        height: '20px', // Højden på slideren
        borderRadius: '20px', // Gør baggrunden rund
        position: 'relative',
        backgroundColor: isChecked ? '#3FD595' : '#ccc', // Grøn når checked, grå når unchecked
        transition: '0.4s',
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: '3px', // Centrer den lille cirkel vertikalt
          left: isChecked ? '20px' : '3px', // Flyt cirklen til højre eller venstre baseret på isChecked
          width: '14px', // Lille cirkel størrelse
          height: '14px', // Lille cirkel størrelse
          borderRadius: '50%', // Gør den lille cirkel rund
          backgroundColor: 'white', // Farven på den lille cirkel
          transition: '0.4s',
        }}
      ></span>
    </span>
        </label>




      </div>
    </div>
  );
};

export default MyChart;
