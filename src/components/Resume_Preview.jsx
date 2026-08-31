const Resume_Preview = ({
  name,
  role,
  about,
  skills,
  education,
  experience,
  projects,
  contact,
  social,
  achievements,
}) => {
  return (
    <div className="resume">

      <div className="resume-content">

        {/* HEADER */}
        <div className="resume-section name-section">

          <h1>
            {name || "Your Name"}
          </h1>

          <h2>
            {role || "Your Professional Role"}
          </h2>

        </div>

        {/* ABOUT */}
        <div className="resume-section">
          <h3>About</h3>

          <p>
            {about ||
              "Your introduction will appear here..."}
          </p>
        </div>

        {/* SKILLS */}
        <div className="resume-section">
          <h3>Skills</h3>

          {skills && skills.length > 0 ? (
            <div className="preview-skill-tags">

              {skills.map((skill, index) => (
                <span
                  className="preview-skill-tag"
                  key={index}
                >
                  {skill}
                </span>
              ))}

            </div>
          ) : (
            <p className="no-skills">
              Your skills will appear here...
            </p>
          )}
        </div>

        {/* EDUCATION */}
        {education &&
          education.length > 0 && (
            <div className="resume-section">

              <h3>Education</h3>

              {education.map(
                (item, index) => (
                  <div
                    className="resume-item"
                    key={index}
                  >
                    <h4>{item.degree}</h4>

                    <p>
                      {item.college}
                    </p>

                    <span>
                      {item.year}
                    </span>
                  </div>
                )
              )}

            </div>
          )}

        {/* EXPERIENCE */}
        {experience &&
          experience.length > 0 && (
            <div className="resume-section">

              <h3>Experience</h3>

              {experience.map(
                (item, index) => (
                  <div
                    className="resume-item"
                    key={index}
                  >
                    <h4>
                      {item.title}
                    </h4>

                    <p>
                      {item.company}
                    </p>

                    <span>
                      {item.duration}
                    </span>

                    <p>
                      {item.description}
                    </p>
                  </div>
                )
              )}

            </div>
          )}

        {/* PROJECTS */}
        {projects &&
          projects.length > 0 && (
            <div className="resume-section">

              <h3>Projects</h3>

              {projects.map(
                (item, index) => (
                  <div
                    className="resume-item"
                    key={index}
                  >
                    <h4>
                      {item.name}
                    </h4>

                    <strong>
                      {item.tech}
                    </strong>

                    <p>
                      {item.description}
                    </p>
                  </div>
                )
              )}

            </div>
          )}

        {/* CONTACT */}
        {(contact.email ||
          contact.phone ||
          contact.location) && (
          <div className="resume-section">

            <h3>Contact</h3>

            {contact.email && (
              <p>📧 {contact.email}</p>
            )}

            {contact.phone && (
              <p>📱 {contact.phone}</p>
            )}

            {contact.location && (
              <p>📍 {contact.location}</p>
            )}

          </div>
        )}

        {/* SOCIAL */}
        {(social.linkedin ||
          social.github) && (
          <div className="resume-section">

            <h3>Links</h3>

            {social.linkedin && (
              <p>
                🔗 LinkedIn:{" "}
                {social.linkedin}
              </p>
            )}

            {social.github && (
              <p>
                💻 GitHub:{" "}
                {social.github}
              </p>
            )}

          </div>
        )}

        {/* ACHIEVEMENTS */}
        {achievements &&
          achievements.length > 0 && (
            <div className="resume-section">

              <h3>Achievements</h3>

              <ul>
                {achievements.map(
                  (item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                  )
                )}
              </ul>

            </div>
          )}

      </div>

    </div>
  );
};

export default Resume_Preview;