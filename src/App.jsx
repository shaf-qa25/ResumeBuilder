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
    const [hobbies, setHobbies] = useState("");

    return (
        <div className="app">
            <h1>Live Resume Editor</h1>

            <div className="resume-container">
                <StarBorder
                    as="div"
                    className="editor-section"
                    color="#b1e2fe"
                    speed="6s"
                    thickness={4}
                    backgroundColor="#80bcf0"
                    borderColor="rgba(4, 39, 80, 0.75)"
                >
                    <Resume_Editor
                        setName={setName}
                        setRole={setRole}
                        setAbout={setAbout}
                        setEmail={setEmail}
                        setHobbies={setHobbies}
                    />
                </StarBorder>

                <StarBorder
                    as="div"
                    className="preview-section"
                    color="#b1e2fe"
                    speed="6s"
                    thickness={4}
                    backgroundColor="#89beed"
                    borderColor="rgba(4, 39, 80, 0.75)"
                >
                    <Resume_Preview
                        name={name}
                        role={role}
                        about={about}
                        email={email}
                        hobbies={hobbies}
                    />
                </StarBorder>
            </div>
        </div>
    );
}

export default App;