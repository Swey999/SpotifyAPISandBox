import React from "react";
import "../styles/App.css";
import "bulma/css/bulma.css";
import PlanetInfo from '../components/PlanetInfo'; // Adjust the path if necessary


// Define a type for the file data
type FileData = {
  name: string;
  rating: number;
  complexity: number;
  reference: number;
};

const Dashboard: React.FC = () => {
  // Sample data
  const files: FileData[] = [
    { name: "file.js", rating: 5, complexity: 3, reference: 5 },
    { name: "file2.js", rating: 3, complexity: 2, reference: 3 },
    { name: "file3.js", rating: 4, complexity: 4, reference: 4 },
    { name: "file4.js", rating: 2, complexity: 1, reference: 2 },
  ];

  return (
    <div className="container">
      <header>
        <h1 className="title">File Check Model</h1>
    </header>

    <section>

        <table className="table is-hoverable is-fullwidth is-striped is-bordered">
          <thead>
            <tr>
              <th>Filde Name</th>
              <th>Company Rating</th>
              <th>Complexity</th>
              <th>Reference</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr key={index}>
                <td>{file.name}</td>
                <td>{file.rating}</td>
                <td>{file.complexity}</td>
                <td>{file.reference}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </section>
        
        <section>
        <h2>Planet Information</h2>
        <PlanetInfo />
        </section>
      </div>
  );
};

export default Dashboard;
