import { useState } from "react";
const Resume_Editor = ({
    setName,
    setRole,
    setAbout,
    setEmail,
    setPhone,
    setLinkedin,
    setGithub,
    setSkills,
    template,
    setTemplate,
    clearResume
}) => {
    return (
        <div className="editor">

            <h2>Edit Your Resume</h2>

            <div className="form-group">
                <label>Name</label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Role</label>
                <input
                    type="text"
                    placeholder="Enter your role"
                    onChange={(e) => setRole(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Phone</label>
                <input
                    type="tel"
                    placeholder="Enter your phone number"
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>About You</label>
                <textarea
                    placeholder="Write something about yourself"
                    onChange={(e) => setAbout(e.target.value)}
                ></textarea>
            </div>

            <h3 className="form-heading">Social Links</h3>

            <div className="form-group">
                <label>LinkedIn</label>
                <input
                    type="url"
                    placeholder="https://linkedin.com/in/yourname"
                    onChange={(e) => setLinkedin(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>GitHub</label>
                <input
                    type="url"
                    placeholder="https://github.com/yourname"
                    onChange={(e) => setGithub(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Skills</label>
                <input
                    type="text"
                    placeholder="Java, Python, C++, HTML, CSS"
                    onChange={(e) => setSkills(e.target.value)}
                />
                <small>Separate skills using commas</small>
            </div>
            <h3 className="form-heading">Choose Template</h3>
            <div className="template-buttons">
                <button
                    className={template === "modern" ? "active-template" : ""}
                    onClick={() => setTemplate("modern")}
                >
                    Modern
                </button>

                <button
                    className={template === "classic" ? "active-template" : ""}
                    onClick={() => setTemplate("classic")}
                >
                    Classic
                </button>

                <button
                    className={template === "minimal" ? "active-template" : ""}
                    onClick={() => setTemplate("minimal")}
                >
                    Minimal
                </button>

            </div>

            <button
                className="clear-button"
                onClick={clearResume}
            >
                Clear Resume
            </button>
        </div>
    );
};
export default Resume_Editor;