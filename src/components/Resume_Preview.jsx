const Resume_Preview = ({ name, role, about, phone, skills, email }) => {
    return (
        <div className="resume">
            <h2>Resume Preview</h2>
            <div className="resume-content">

                {/* Name Section */}
                <div className="resume-section name-section">
                    <h1>{name || "Your Name"}</h1>
                    <h3>{role || "Your Role"}</h3>

                    {/* Contact Information */}
                    <div className="contact-section">
                        {phone && (
                            <span className="phone">
                                {phone}
                            </span>
                        )}

                        {email && (
                            <span className="email">
                                {email}
                            </span>
                        )}
                    </div>
                </div>

                {/* Divider */}
                <div className="resume-divider"></div>

                {/* About Section */}
                <div className="resume-section about-section">
                    <h4>About</h4>
                    <p>
                        {about || "Your introduction will appear here..."}
                    </p>
                </div>

                {/* Skills Section */}
                <div className="resume-section skills-section">
                    <h4>Skills</h4>
                    <p>
                        {skills || "Your skills will appear here..."}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Resume_Preview;