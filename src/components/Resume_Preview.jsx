const Resume_Preview = ({ name, role, about ,student, mail , society, college}) => {
    return (
        <div className="resume">
            <h2>Resume Preview</h2>

            <div className="resume-content">
                {/* Name Section */}
                <div className="resume-section name-section">
                    <h1>{name || "Your Name"}</h1>
                    <h2>{student || "Your Student Number"}</h2>
                    <h2>{mail || "Your College mail"}</h2>
                    <h2>{society || "Your Scoiety"}</h2>
                    <h3>{role || "Your Role"}</h3>
                    <h3>{college || "Your College name"}</h3>
                    

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
