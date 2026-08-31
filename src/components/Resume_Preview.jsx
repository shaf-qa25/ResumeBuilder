const Resume_Preview = ({ name, role, hobbies, about }) => {
    return (
        <div className="resume">
            <h2>Resume Preview</h2>

            <div className="resume-content">
                {/* Name Section */}
                <div className="resume-section name-section">
                    <h1>{name || "Your Name"}</h1>
                    <h3>{role || "Your Role"}</h3>
                </div>
                <div className="resume-section">
                <h3>Hobbies</h3>
              <p>{hobbies || "Your hobbies"}</p>
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
