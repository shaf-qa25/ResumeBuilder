const Resume_Preview = ({ name, role, email, hobbies ,about }) => {
    return (
        <div className="resume">
            <h2>Resume Preview</h2>

            <div className="resume-content">
                {/* Name Section */}
                <div className="resume-section name-section">
                    <h1>{name || "Your Name"}</h1>
                    <h3>{role || "Your Role"}</h3>
                    <h3>{email || "Your Email"}</h3>
                    
                </div>
                <div className = "resume-section name-section">
                    <h2 align = "centre">{hobbies || "Your Hobbies"}</h2>
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
