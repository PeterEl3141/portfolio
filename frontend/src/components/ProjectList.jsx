import './ProjectList.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

export default function ProjectList() {
  const [projects, setProjects] = useState([]); 
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API}/`)
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects.");
        setLoading(false);
      });
  }, []); 

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="project-list">
      {projects.map((project) => (
        <div key={project.id} className="project-tile">
          <img src={project.image} alt={`${project.title} screenshot`} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <small>{new Date(project.date).toLocaleDateString()}</small>
        </div>
      ))}
    </div>
  );
}
