const Resume_Preview = ({ name, role, about, github, email, phone }) => {
    return (
        <div className="resume">
            <h2>Resume Preview</h2>

            <div className="resume-content">
                {/* Name Section */}
                <div className="resume-section name-section">
                    <h1>{name || "Your Name"}</h1>
                    <h3>{role || "Your Role"}</h3>

                    <div className="contact-info">
                        {email && <span>{email}</span>}
                        {phone && <span>{phone}</span>}
                        {github && (
                            <a
                                href={`https://github.com/${github}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github-link"
                            >
                                github.com/{github}
                            </a>
                        )}
                    </div>
                </div>

                {/* Divider */}
                <div className="resume-divider"></div>

                {/* About Section */}
                <div className="resume-section about-section">
                    <p>{about || "Your introduction will appear here..."}</p>
                </div>
            </div>
        </div>
    );
};

export default Resume_Preview;