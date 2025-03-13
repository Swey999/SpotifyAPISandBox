import axios from 'axios';

const swapi = axios.create({
  baseURL: 'https://swapi.dev/api',
});

interface Planet {
  name: string;
  climate: string;
  terrain: string;
  population: string;
}

export const getAllPlanets = async (): Promise<Planet[]> => {
  let planets: Planet[] = [];
  let url = '/planets/';  // API endpoint for planets
  
  try {
    while (url) {
      const response = await swapi.get(url);
      planets = planets.concat(response.data.results);
      url = response.data.next ? new URL(response.data.next).pathname : '';
    }
    
    return planets;
  } catch (error) {
    console.error("Error fetching planets:", error);
    throw error;
  }
};
