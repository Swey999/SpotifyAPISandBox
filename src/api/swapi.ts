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
  let url: string | null = 'planets/';  // ✅ Fix: No leading slash

  try {
    while (url) {
      console.log("Fetching data from:", swapi.defaults.baseURL + '/' + url);
      
      const response: { data: { results: Planet[]; next: string | null } } = await swapi.get(url);  // ✅ Explicit type

      planets = [...planets, ...response.data.results]; 
      url = response.data.next; // ✅ Correct type handling
    }

    return planets;
  } catch (error) {
    console.error("Error fetching planets:", error);
    throw error;
  }
};
