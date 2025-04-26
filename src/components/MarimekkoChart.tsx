import { ResponsiveBar } from '@nivo/bar'
import React, { useState } from 'react'

const BarChart = () => {

  const generateDaysInMonth = (year: number, month: number) => {
  const days = new Date(year, month, 0).getDate()
  return Array.from({ length: days }, (_, i) => ({
    day: (i + 1).toString(),
    kWh: 0, // or null if you prefer
  }))
}


const rawDataFromAPI = [
  { day: '2', kWh: 10.2 },
  { day: '5', kWh: 14.7 },
  { day: '6', kWh: 18.0 },
]
const [year, setYear] = useState(2025)
const [month, setMonth] = useState(4) // April

const data = generateDaysInMonth(year, month)

const fullData = generateDaysInMonth(2025, 4).map(d => {
  const match = rawDataFromAPI.find(entry => entry.day === d.day)
  return {
    day: d.day,
    kWh: match ? match.kWh : 0 // or `null` to show gaps
  }
})

  return (
    

    <div>

    <div style={{ height: 400, width: '100%' }}>
    <ResponsiveBar
  data={fullData}
  keys={['kWh']}
  indexBy="day"
  margin={{ top: 50, right: 30, bottom: 50, left: 60 }}
  padding={0.1}  // Adjust padding to give bars space within grid
  colors={"#00b33c"}
  enableGridX={true}  // Disable vertical grid lines to focus on horizontal
  enableGridY={true}   // Keep horizontal grid lines
  theme={{
    grid: {
      line: {
        stroke: '#ccc',   // Light color for grid lines
        strokeWidth: 1,
      },
    },
  }}
  axisBottom={{
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: 'Day',
    legendPosition: 'middle',
    legendOffset: 32,
  }}
  axisLeft={{
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: 'kWh',
    legendPosition: 'middle',
    legendOffset: -40,
  }}
  enableLabel={false}
  animate={true}
  tooltip={({ indexValue, value }) => (
    <strong>{`Day ${indexValue}: ${value?.toFixed(2)} kWh`}</strong>
  )}
/>

    </div>
          <div style={{ marginBottom: '1rem' }}>
            <button onClick={() => setMonth(3)}>March</button>
            <button onClick={() => setMonth(4)}>April</button>
            <button onClick={() => setMonth(5)}>May</button>
          </div>
  </div>
  )
}

export default BarChart
