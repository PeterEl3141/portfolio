import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-title">Peter Elliott</h1>

      <div className="hero-body">
        <div className="hero-left">
          <h2>Software Engineer</h2>
          <p className="hero-text">
            Career-changing software engineer with a background in Michelin-star
            kitchens and formal maths teaching. I build full-stack web apps with
            clean, modern interfaces and a focus on usability and reliability.
          </p>
        </div>

        <div className="hero-right">
          <img
            src="/profile-picture.jpg"
            alt="Peter Elliott"
            className="profile-pic"
          />
        </div>
      </div>
    </section>
  );
}
