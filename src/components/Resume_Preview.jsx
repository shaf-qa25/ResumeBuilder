const Resume_Preview = ({
    name,
    role,
    about,
    email,
    phone,
    linkedin,
    github,
    skills,
    template
}) => {

    const skillList = skills
        ? skills.split(",").map((skill) => skill.trim())
        : [];

    return (
        <div className="resume">
            <h2>Resume Preview</h2>
            <div className={`resume-content ${template}`}>
                <div className="resume-header">
                    <div>
                        <h1>{name || "Your Name"}</h1>
                        <h3>{role || "Your Role"}</h3>
                    </div>
                </div>
                <div className="resume-divider"></div>
                <div className="contact-info">
                    {email && <span>📧 {email}</span>}
                    {phone && <span>📱 {phone}</span>}
                    {linkedin && (
                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                    )}
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    )}
                </div>
                <div className="resume-section">
                    <h4>Profile</h4>
                    <p>
                        {about ||
                            "Your introduction will appear here..."}
                    </p>
                </div>
                {skillList.length > 0 && (
                    <div className="resume-section">
                        <h4>Skills</h4>
                        <div className="skills-container">
                            {skillList.map((skill, index) => (
                                <span
                                    className="skill"
                                    key={index}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Resume_Preview;