import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { day: '1', kWh: 10 },
  { day: '2', kWh: 15 },
  { day: '3', kWh: 30 },
  // More data...
];

const MyChart = () => (
  <ResponsiveContainer width="100%" height={400}>
    <BarChart data={data} margin={{ top: 20, right: 30, left: 40, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="kWh" fill="#8884d8" />
    </BarChart>
  </ResponsiveContainer>
);

export default MyChart