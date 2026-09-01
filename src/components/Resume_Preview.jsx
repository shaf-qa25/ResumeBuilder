const Resume_Preview = ({name,role,about,education,experience,skills,projects,template,}) => {
  const displayName = name || "Your Name";
  const displayRole = role || "Your Role";
  const displayAbout =
    about || "Your professional introduction will appear here...";
  const displayEducation = education || "Your education details will appear here...";
  const displayExperience =
    experience || "Your experience details will appear here...";
  const displaySkills = skills || "JavaScript, React, HTML & CSS";
  const displayProjects =
    projects || "Your project details will appear here.";
  // PRO
  if (template === "professional") {
    return (
      <div className="resume professional-template">
        <div className="professional-header">
          <h1>{displayName}</h1>
          <h3>{displayRole}</h3>
        </div>

        <div className="professional-body">
          <section>
            <h2>Profile</h2>
            <p>{displayAbout}</p>
          </section>

          <section>
            <h2>Education</h2>
            <p>{displayEducation}</p>
          </section>

          <section>
            <h2>Experience</h2>
            <p>{displayExperience}</p>
          </section>

          <section>
            <h2>Skills</h2>
            <p>{displaySkills}</p>
          </section>

          <section>
            <h2>Projects</h2>
            <p>{displayProjects}</p>
          </section>
        </div>
      </div>
    );
  }


  // M0d
  if (template === "modern") {
    return (
      <div className="resume modern-template">
        <aside className="modern-sidebar">
          <h1>{displayName}</h1>
          <h3>{displayRole}</h3>

          <div className="modern-side-section">
            <h2>SKILLS</h2>
            <p>{displaySkills}</p>
          </div>

          <div className="modern-side-section">
            <h2>CONTACT</h2>
            <p>your@email.com</p>
            <p>+91 98765 43210</p>
          </div>
        </aside>

        <main className="modern-content">
          <section>
            <h2>Profile</h2>
            <p>{displayAbout}</p>
          </section>

          <section>
            <h2>Education</h2>
            <p>{displayEducation}</p>
          </section>

          <section>
            <h2>Experience</h2>
            <p>{displayExperience}</p>
          </section>

          <section>
            <h2>Projects</h2>
            <p>{displayProjects}</p>
          </section>
        </main>
      </div>
    );
  }


  // CR
  return (
    <div className="resume creative-template">
      <div className="creative-header">
        <div>
          <h1>{displayName}</h1>
          <h3>{displayRole}</h3>
        </div>

        <div className="creative-contact">
          <p>your@email.com</p>
          <p>+91 98765 43210</p>
        </div>
      </div>

      <div className="creative-content">
        <section className="creative-card">
          <h2>About Me</h2>
          <p>{displayAbout}</p>
        </section>

        <div className="creative-grid">
          <section className="creative-card">
            <h2>Education</h2>
            <p>{displayEducation}</p>
          </section>

          <section className="creative-card">
            <h2>Skills</h2>
            <p>{displaySkills}</p>
          </section>
        </div>

        <section className="creative-card">
          <h2>Experience</h2>
          <p>{displayExperience}</p>
        </section>

        <section className="creative-card">
          <h2>Projects</h2>
          <p>{displayProjects}</p>
        </section>
      </div>
    </div>
  );
};

export default Resume_Preview;