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
    const [location, setLocation] = useState("");
    const [skills, setSkills] = useState("");
    const [college, setCollege] = useState("");
    const [degree, setDegree] = useState("");
    const [year, setYear] = useState("");

    const handleReset = () => {
        setName("");
        setRole("");
        setAbout("");
        setEmail("");
        setPhone("");
        setLocation("");
        setSkills("");
        setCollege("");
        setDegree("");
        setYear("");
    };

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
                        setEmail={setEmail}
                        setPhone={setPhone}
                        setLocation={setLocation}
                        setSkills={setSkills}
                        setCollege={setCollege}
                        setDegree={setDegree}
                        setYear={setYear}
                        handleReset={handleReset}
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
                        location={location}
                        skills={skills}
                        college={college}
                        degree={degree}
                        year={year}
                    />
                </StarBorder>
            </div>
        </div>
    );
}

export default App;