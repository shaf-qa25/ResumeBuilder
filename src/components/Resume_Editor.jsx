import { useState } from "react";

const Resume_Editor = ({
    resume,
    updateResume,
    addSkill,
    removeSkill,
}) => {

    const [skill, setSkill] = useState("");

    const handleSkill = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();

            addSkill(skill);
            setSkill("");
        }
    };

    return (
        <div className="editor">

            <div className="editor-title">
                <h2>Edit Your Resume</h2>
                <p>Fill in your information below</p>
            </div>

            {/* PERSONAL INFORMATION */}
            <div className="form-section">
                <h3>Personal Information</h3>

                <label>Full Name</label>
                <input
                    type="text"
                    placeholder="e.g. Aniket Tiwari"
                    value={resume.name}
                    onChange={(e) =>
                        updateResume("name", e.target.value)
                    }
                />

                <label>Professional Role</label>
                <input
                    type="text"
                    placeholder="e.g. Flutter Developer"
                    value={resume.role}
                    onChange={(e) =>
                        updateResume("role", e.target.value)
                    }
                />

                <div className="two-inputs">

                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="you@email.com"
                            value={resume.email}
                            onChange={(e) =>
                                updateResume("email", e.target.value)
                            }
                        />
                    </div>

                    <div>
                        <label>Phone</label>
                        <input
                            type="text"
                            placeholder="+91 9101572842"
                            value={resume.phone}
                            onChange={(e) =>
                                updateResume("phone", e.target.value)
                            }
                        />
                    </div>

                </div>

                <label>Location</label>
                <input
                    type="text"
                    placeholder="Ghaziabad, India"
                    value={resume.location}
                    onChange={(e) =>
                        updateResume("location", e.target.value)
                    }
                />
            </div>

            {/* ABOUT */}
            <div className="form-section">
                <h3>About Me</h3>

                <textarea
                    placeholder="Write a short professional summary..."
                    value={resume.about}
                    onChange={(e) =>
                        updateResume("about", e.target.value)
                    }
                />
            </div>

            {/* SKILLS */}
            <div className="form-section">

                <h3>Skills</h3>

                <input
                    type="text"
                    placeholder="Type a skill and press Enter"
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                    onKeyDown={handleSkill}
                />

                <div className="skill-editor">

                    {resume.skills.map((item, index) => (
                        <div className="skill-tag" key={index}>
                            {item}

                            <button
                                onClick={() => removeSkill(index)}
                            >
                                ×
                            </button>
                        </div>
                    ))}

                </div>

            </div>

            {/* EDUCATION */}
            <div className="form-section">

                <h3>Education</h3>

                <textarea
                    placeholder="B.Tech in Computer Science&#10;AKTU University&#10;2025 - 2029"
                    value={resume.education}
                    onChange={(e) =>
                        updateResume("education", e.target.value)
                    }
                />

            </div>

            {/* EXPERIENCE */}
            <div className="form-section">

                <h3>Experience</h3>

                <textarea
                    placeholder="Software Developer Intern&#10;Company Name&#10;June 2026 - August 2026"
                    value={resume.experience}
                    onChange={(e) =>
                        updateResume("experience", e.target.value)
                    }
                />

            </div>

            {/* PROJECTS */}
            <div className="form-section">

                <h3>Projects</h3>

                <textarea
                    placeholder="Resume Builder&#10;React, JavaScript, CSS&#10;Built a live resume editing application..."
                    value={resume.projects}
                    onChange={(e) =>
                        updateResume("projects", e.target.value)
                    }
                />

            </div>

        </div>
    );
};

export default Resume_Editor;
