// ContactSection.jsx
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <p>
        If you’d like to talk about a role, a project, or just say hello,
        feel free to reach out.
      </p>

      <div className="contact-links">
        <a href="mailto:peterelliott96@gmail.com">peterelliott96@gmail.com</a>
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/peter-elliott-90a7a4289/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
