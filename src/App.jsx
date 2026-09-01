import { useState } from "react";
import "./App.css";
import Resume_Editor from "./components/Resume_Editor";
import Resume_Preview from "./components/Resume_Preview";
import StarBorder from "./components/StarBorder";

function App() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [about, setAbout] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  return (
    <div className="app">
      <h1>Live Resume Editor</h1>

      <div className="resume-container">
        <StarBorder
          as="div"
          className="editor-section"
          color="#0284c7"
          speed="6s"
          thickness={4}
          backgroundColor="#ffffff"
          borderColor="rgba(14, 165, 233, 0.35)"
        >
          <Resume_Editor
            setName={setName}
            setRole={setRole}
            setAbout={setAbout}
            setLinkedin={setLinkedin}
            setGithub={setGithub}
            github={github}
            linkedin={linkedin}
          />
        </StarBorder>

        <StarBorder
          as="div"
          className="preview-section"
          color="#0284c7"
          speed="6s"
          thickness={4}
          backgroundColor="#ffffff"
          borderColor="rgba(14, 165, 233, 0.35)"
        >
          <Resume_Preview
            name={name}
            role={role}
            about={about}
            linkedin={linkedin}
            github={github}
          />
        </StarBorder>
      </div>
    </div>
  );
}

export default App;
