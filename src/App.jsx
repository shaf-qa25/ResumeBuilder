import { useState } from "react";
import "./App.css";
import Resume_Editor from "./components/Resume_Editor";
import Resume_Preview from "./components/Resume_Preview";
import StarBorder from "./components/StarBorder";

function App() {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [skills, setSkills] = useState("");
    const [github, setGithub] = useState("");
    const [about, setAbout] = useState("");

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
                    backgroundColor="#79dcdcaf"
                    borderColor="rgba(22, 159, 222, 0.35)"
                >
                    <Resume_Editor
                        setName={setName}
                        setRole={setRole}
                        setAbout={setAbout}
                        setContact={setContact}
                        setEmail={setEmail}
                        setSkills={setSkills}
                        setGithub={setGithub}

                    />
                </StarBorder>

                <StarBorder
                    as="div"
                    className="preview-section"
                    color="#0284c7"
                    speed="6s"
                    thickness={4}
                    backgroundColor="#80d4eccc"
                    borderColor="rgba(14, 165, 233, 0.35)"
                >
                    <Resume_Preview
                        name={name}
                        role={role}
                        about={about}
                        contact={contact}
                        email={email}
                        skills={skills}
                        github={github}
                    />
                </StarBorder>
            </div>
        </div>
    );
}

export default App;