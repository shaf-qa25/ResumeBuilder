import { useState } from "react";
import "./App.css";
import Resume_Editor from "./components/Resume_Editor";
import Resume_Preview from "./components/Resume_Preview";
import StarBorder from "./components/StarBorder";

function App() {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [studentno, setstudentno] = useState("");
    const [collegemail, setcollegemail] = useState("");
    const [society, setsociety] = useState("");
    const [college, setcollege] = useState("");
    const [about, setAbout] = useState("");

    return (
        <div className="app">
            <h1>Live Resume Editor</h1>

            <div className="resume-container">
                <StarBorder
                    as="div"
                    className="editor-section"
                    color="#1876a5"
                    speed="6s"
                    thickness={4}
                    backgroundColor="#ffffff"
                    borderColor="rgba(7, 95, 136, 0.35)"
                >
                    <Resume_Editor
                        setName={setName}
                        setstudentno={setstudentno}
                        setcollegemail={setcollegemail}
                        setsociety={setsociety}
                        setRole={setRole}
                        setcollege={setcollege}
                        setAbout={setAbout}
                        
                    />
                </StarBorder>

                <StarBorder
                    as="div"
                    className="preview-section"
                    color="#22a6e9"
                    speed="6s"
                    thickness={4}
                    backgroundColor="#ffffff"
                    borderColor="rgba(8, 114, 163, 0.35)"
                >
                    <Resume_Preview
                        name={name}
                        role={role}
                        about={about}
                        student={studentno}
                        mail={collegemail}
                        society={society}
                        college={college}
                    />
                </StarBorder>
            </div>
        </div>
    );
}

export default App;