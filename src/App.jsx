import { useState } from "react";
import "./App.css";

import Resume_Editor from "./components/Resume_Editor";
import Resume_Preview from "./components/Resume_Preview";

import StarBorder from "./components/StarBorder";

function App() {
  
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [about, setAbout] = useState("");

  
  const [skills, setSkills] = useState([]);

  
  const [education, setEducation] = useState([]);

 
  const [experience, setExperience] = useState([]);

  
  const [projects, setProjects] = useState([]);

  
  const [contact, setContact] = useState({
    email: "",
    phone: "",
    location: "",
  });

  
  const [social, setSocial] = useState({
    linkedin: "",
    github: "",
  });

 
  const [achievements, setAchievements] = useState([]);

  
  const [darkMode, setDarkMode] = useState(false);

  const completedFields = [name, role, about].filter(
    (field) => field.trim() !== ""
  ).length;

  const totalSections = 8;

  let completedSections = completedFields;

  if (skills.length > 0) completedSections++;
  if (education.length > 0) completedSections++;
  if (experience.length > 0) completedSections++;
  if (projects.length > 0) completedSections++;
  if (
    contact.email ||
    contact.phone ||
    contact.location
  ) {
    completedSections++;
  }

  if (social.linkedin || social.github) {
    completedSections++;
  }

  if (achievements.length > 0) completedSections++;

  const progress = Math.min(
    100,
    Math.round((completedSections / totalSections) * 100)
  );

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>

      {/* HEADER */}
      <header className="app-header">
        <div>
          <p className="eyebrow">BUILD YOUR FUTURE</p>

          <h1>
            Resume<span>Craft</span>
          </h1>

          <p className="subtitle">
            Create a professional resume with live preview.
          </p>
        </div>

        <button
          className="theme-button"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </header>

      {/* PROGRESS */}
      <div className="progress-card">
        <div className="progress-info">
          <span>Resume Progress</span>
          <strong>{progress}%</strong>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p>
          {progress === 100
            ? "🎉 Your resume is complete!"
            : "Complete your information to build your resume."}
        </p>
      </div>

      {/* MAIN */}
      <div className="resume-container">

        {/* EDITOR */}
        <StarBorder
          as="div"
          className="editor-section"
          color="#0284c7"
          speed="6s"
          thickness={4}
          backgroundColor={darkMode ? "#111827" : "#ffffff"}
          borderColor="rgba(14, 165, 233, 0.35)"
        >
          <Resume_Editor
            setName={setName}
            setRole={setRole}
            setAbout={setAbout}

            skills={skills}
            setSkills={setSkills}

            education={education}
            setEducation={setEducation}

            experience={experience}
            setExperience={setExperience}

            projects={projects}
            setProjects={setProjects}

            contact={contact}
            setContact={setContact}

            social={social}
            setSocial={setSocial}

            achievements={achievements}
            setAchievements={setAchievements}
          />
        </StarBorder>

        {/* PREVIEW */}
        <StarBorder
          as="div"
          className="preview-section"
          color="#0284c7"
          speed="6s"
          thickness={4}
          backgroundColor={darkMode ? "#111827" : "#ffffff"}
          borderColor="rgba(14, 165, 233, 0.35)"
        >
          <Resume_Preview
            name={name}
            role={role}
            about={about}

            skills={skills}

            education={education}

            experience={experience}

            projects={projects}

            contact={contact}

            social={social}

            achievements={achievements}
          />
        </StarBorder>

      </div>

      {/* FOOTER */}
      <footer>
        <p>
          ResumeCraft • Build a resume you're proud of.
        </p>
      </footer>

    </div>
  );
}

export default App;