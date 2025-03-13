import React, { useEffect, useState } from 'react';
import { getAllPlanets } from '../api/swapi';

interface Planet {
  name: string;
  climate: string;
  terrain: string;
  population: string;
}

const PlanetInfo: React.FC = () => {
  const [planet, setPlanet] = useState<Planet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const data = await getAllPlanets();  // Fetch all planets
        setPlanet(data);
      } catch (err) {
        setError('Failed to fetch planet data.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>Planet Info</h2>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>Name</th>
            <th>Climate</th>
            <th>Terrain</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {planet.map((p, index) => (
            <tr key={index}>
              <td>{p.name}</td>
              <td>{p.climate}</td>
              <td>{p.terrain}</td>
              <td>{p.population}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlanetInfo;
