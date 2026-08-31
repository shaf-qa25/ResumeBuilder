import { useState } from "react";
import "./App.css";
import Resume_Editor from "./components/Resume_Editor";
import Resume_Preview from "./components/Resume_Preview";
import StarBorder from "./components/StarBorder";
import logo from "./assest/logo.png";

function App() {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [about, setAbout] = useState("");

    return (
        
        <div className="app">
            <div className="navbar">
                <button>Sign up</button>
                  <button>Login</button>
                  <button>Templates</button>
                  <button>About</button>
            </div>
            <div className="logo">
                 <img src={logo} alt="BDCOE Logo" />
                  <h1>Live Resume Editor</h1>
                  
            </div>
           

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
                    />
                </StarBorder>
            </div>
        <div className="footer">
            <h5>learn.develop.execute</h5>
            <img src={logo} alt="BDCOE Logo" />
        </div>
        </div>
    );
}

export default App;