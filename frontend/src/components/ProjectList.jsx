import "./ProjectList.css";
import { PROJECTS } from "../data/projects";

export default function ProjectList() {
  return (
    <section className="project-list">
      {PROJECTS.map((project) => (
        <article key={project.id} className="project-tile">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="project-image"
          />

          <h3>{project.title}</h3>

          <p className="project-description">{project.description}</p>

          {project.tech && project.tech.length > 0 && (
            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t} className="tech-pill">
                  {t}
                </span>
              ))}
            </div>
          )}

          {project.date && (
            <small className="project-date">
              {new Date(project.date).toLocaleDateString()}
            </small>
          )}

          <div className="project-links">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                View project
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noreferrer">
                View code
              </a>
            )}
          </div>
        </article>
      ))}
    </section>
  );
}
