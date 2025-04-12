import React from "react";
import "../styles/App.css";
import "../styles/index.css";
import profilePic from "../assets/nicolaj.jpg"; // Replace with your actual profile image

const About: React.FC = () => {
  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <h1 className="h1">Who is this guy?</h1>
      <p style={{ maxWidth: "42rem", margin: "0 auto", marginTop: "30px" }}>
        Hi! I’m Nicolaj William Jensen — an ambitious and dedicated Computer Science student with a passion for programming and solving problems with smart tech.
      </p>

      <div className="box" style={{ marginTop: "40px" }}>
        <div className="columns is-vcentered">
          {/* Profile Picture */}
          <div className="column is-half">
            <figure className="image is-4by3">
              <img
                src={profilePic}
                alt="Nicolaj William Jensen"
                style={{
                  objectFit: "cover",
                  objectPosition: "18% 18%", // <-- key change
                  transform: "scale(0.8)", // Zoom out (smaller = more zoomed out)
                  width: "100%",
                  height: "100%",
                  borderRadius: "1rem",
                }}
              />
            </figure>
          </div>

          {/* Intro Section */}
          <div className="column is-half">
            <h2 className="title is-3">Who am I? 👨‍💻</h2>
            <p className="has-text-left">
              My name is Nicolaj William Jensen, I’m 24 years old and currently studying Computer Science.
              I’m passionate about programming, tech solutions, and love developing software that creates real value and impact.
            </p>
            <br />
            <p className="has-text-left">
              I have experience working with both web and desktop applications, especially using C#, .NET, and MSSQL.
              I’m structured, quick to learn, and work efficiently — both independently and in teams.
              While my main focus is backend development, I’m flexible and open to working with frontend tasks as well.
            </p>
            <br />
            <p className="has-text-left">
              My goal is to develop IT solutions that drive meaningful improvements for businesses.
              I’m currently looking for an internship where I can put my skills into practice, grow as a developer, and learn from the daily challenges in a professional environment.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Box */}
      <div className="box" style={{ marginTop: "2rem" }}>
  <h2 className="title is-4">📬 Get in Touch</h2>
  <p style={{ marginBottom: "1.5rem" }}>
    Want to collaborate, offer an internship, or just chat about tech? Reach out below.
  </p>

  <div className="columns is-variable is-6 is-multiline">
    <div className="column is-one-third-desktop is-half-tablet is-full-mobile">
      <div className="is-flex is-align-items-center">
        <span className="icon mr-2"></span>
        <div>
          <p className="has-text-weight-semibold mb-1">Email</p>
          <a href="mailto:nicolaj@example.com" className="has-text-link">
            nicolaj@example.com
          </a>
        </div>
      </div>
    </div>

    <div className="column is-one-third-desktop is-half-tablet is-full-mobile">
      <div className="is-flex is-align-items-center">
        <span className="icon mr-2"></span>
        <div>
          <p className="has-text-weight-semibold mb-1">LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="has-text-link"
          >
            linkedin.com/in/yourprofile
          </a>
        </div>
      </div>
    </div>

    <div className="column is-one-third-desktop is-half-tablet is-full-mobile">
      <div className="is-flex is-align-items-center">
        <span className="icon mr-2"></span>
        <div>
          <p className="has-text-weight-semibold mb-1">GitHub</p>
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="has-text-link"
          >
            github.com/yourgithub
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default About;
