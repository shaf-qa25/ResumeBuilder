const Resume_Preview = ({
    name,
    role,
    about,
    email,
    phone,
    location,
    skills,
    college,
    degree,
    year
}) => {
    const skillsList = skills
        ? skills.split(",").map((skill) => skill.trim())
        : [];

    return (
        <div className="resume">
            <h2>Resume Preview</h2>

            <div className="resume-content">
                
                <div className="resume-section name-section">
                    <h1>{name || "Your Name"}</h1>
                    <h3>{role || "Your Role"}</h3>

                    {(email || phone || location) && (
                        <p className="contact-info">
                            {email} {email && (phone || location) ? " | " : ""}
                            {phone} {phone && location ? " | " : ""}
                            {location}
                        </p>
                    )}
                </div>

                <div className="resume-divider"></div>

                <div className="resume-section about-section">
                    <h3>About Me</h3>
                    <p>{about || "Your introduction will appear here..."}</p>
                </div>

                {skillsList.length > 0 && (
                    <div className="resume-section">
                        <h3>Skills</h3>
                        <div className="skills-list">
                            {skillsList.map((skill, index) => (
                                <span className="skill-tag" key={index}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {(college || degree || year) && (
                    <div className="resume-section">
                        <h3>Education</h3>
                        <p><strong>{college}</strong></p>
                        <p>{degree}</p>
                        <p>{year}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Resume_Preview;
