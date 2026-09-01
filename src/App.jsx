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

    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={`app ${darkMode ? "dark" : ""}`}>
            <div className="app-header">
                <h1>Live Resume Editor</h1>
                <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>

            </div>

            <div className="resume-container">
                <StarBorder
                    as="div"
                    className="editor-section"
                    color="#0284c7"
                    speed="6s"
                    thickness={4}
                    backgroundColor={darkMode ? "#1e293b" : "#ffffff"}
                    borderColor="rgba(14, 165, 233, 0.35)"
                >
                    <Resume_Editor
                        setName={setName}
                        setRole={setRole}
                        setAbout={setAbout}
                        setEmail={setEmail}
                    />
                </StarBorder>

                <StarBorder
                    as="div"
                    className="preview-section"
                    color="#0284c7"
                    speed="6s"
                    thickness={4}
                    backgroundColor={darkMode ? "#1e293b" : "#ffffff"}
                    borderColor="rgba(14, 165, 233, 0.35)"
                >
                    <Resume_Preview
                        name={name}
                        role={role}
                        about={about}
                        email={email}
                    />
                </StarBorder>
            </div>
        </div>
    );
}

export default App;