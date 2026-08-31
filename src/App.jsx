import { useState } from "react";
import "./App.css";
import Resume_Editor from "./components/Resume_Editor";
import Resume_Preview from "./components/Resume_Preview";
import StarBorder from "./components/StarBorder";

function App() {
    const [resume, setResume] = useState({
        name: "",
        role: "",
        email: "",
        phone: "",
        location: "",
        about: "",
        skills: [],
        education: "",
        experience: "",
        projects: "",
    });

    const updateResume = (field, value) => {
        setResume((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const addSkill = (skill) => {
        if (!skill.trim()) return;

        setResume((prev) => ({
            ...prev,
            skills: [...prev.skills, skill.trim()],
        }));
    };

    const removeSkill = (index) => {
        setResume((prev) => ({
            ...prev,
            skills: prev.skills.filter((_, i) => i !== index),
        }));
    };

    return (
        <div className="app">
            <header className="app-header">
                <div>
                    <span className="badge">RESUME BUILDER</span>
                    <h1>Build Your <span>Professional Resume</span></h1>
                    <p>
                        Create and preview your resume in real-time.
                    </p>
                </div>
            </header>

            <div className="resume-container">

                <StarBorder
                    as="div"
                    className="editor-section"
                    color="#0284c7"
                    speed="6s"
                    thickness={3}
                    backgroundColor="#ffffff"
                    borderColor="rgba(14, 165, 233, 0.25)"
                >
                    <Resume_Editor
                        resume={resume}
                        updateResume={updateResume}
                        addSkill={addSkill}
                        removeSkill={removeSkill}
                    />
                </StarBorder>

                <StarBorder
                    as="div"
                    className="preview-section"
                    color="#0284c7"
                    speed="6s"
                    thickness={3}
                    backgroundColor="#ffffff"
                    borderColor="rgba(14, 165, 233, 0.25)"
                >
                    <Resume_Preview resume={resume} />
                </StarBorder>

            </div>
        </div>
    );
}

export default App;
