const Resume_Preview = ({ name, role, about,Skills}) => {
    return (
        <div className="resume">
            <h2>Resume Preview</h2>

            <div className="resume-content">
                {/* Name Section */}
                <div className="resume-section name-section">
                    <h1>{name || "Your Name"}</h1>
                    <h3>{role || "Your Role"}</h3>
                </div>

                {/* Divider */}
                <div className="resume-divider"></div>

                {/* About Section */}
                <div className="resume-section about-section">
                    <p>{about || "Your introduction will appear here..."}</p>
                </div>

                {/* Skills Section */}
                <div className="resume-section skills-section">
                    <h3>Skills</h3>
                    <p>Write about your skills</p>
                </div>

                </div>
            </div>
    );
};

export default Resume_Preview;
