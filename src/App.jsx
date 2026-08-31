import { useState } from "react";
import "./App.css";
import Resume_Editor from "./components/Resume_Editor";
import Resume_Preview from "./components/Resume_Preview";
import StarBorder from "./components/StarBorder";

function App() {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [about, setAbout] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [github, setGithub] = useState("");
    const [skills, setSkills] = useState("");
    const [template, setTemplate] = useState("modern");
    
    const clearResume = () => {
        setName("");
        setRole("");
        setAbout("");
        setEmail("");
        setPhone("");
        setLinkedin("");
        setGithub("");
        setSkills("");
        setTemplate("modern");
    };

    return (
        <div className="app">
            <h1>Live Resume Editor</h1>
            <p className="subtitle">Create your professional resume in real time</p>

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
                        setEmail={setEmail}
                        setPhone={setPhone}
                        setLinkedin={setLinkedin}
                        setGithub={setGithub}
                        setSkills={setSkills}
                        template={template}
                        setTemplate={setTemplate}
                        clearResume={clearResume}
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
                        email={email}
                        phone={phone}
                        linkedin={linkedin}
                        github={github}
                        skills={skills}
                        template={template}
                    />
                </StarBorder>
            </div>
        </div>
    );
}

export default App;