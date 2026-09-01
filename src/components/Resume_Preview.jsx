const Resume_Preview = ({ name, role, about, linkedin, github }) => {
  return (
    <div className="resume">
      <h2>Resume Preview</h2>

      <div className="resume-content">
        {/* Name Section */}
        <div className="resume-section name-section">
          <h1>{name || "Your Name"}</h1>
          <h3>{role || "Your Role"}</h3>
        </div>

        {/* Divider */}
        <div className="resume-divider"></div>

        {/* About Section */}
        <div className="resume-section about-section">
          <p>{about || "Your introduction will appear here..."}</p>
        </div>

        <div className="resume-divider"></div>
        <div className="social-links">
          {linkedin && (
            <a
              href={`https://www.linkedin.com/in/${linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          )}

          {github && (
            <a
              href={`https://github.com/${github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume_Preview;
