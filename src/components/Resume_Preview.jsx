const Resume_Preview = ({ name, role, contact, email, github, skills, about }) => {
    return (
        <div className="resume">
            <h2>Resume Preview</h2>

            <div className="resume-content">
                {/* Name Section */}
                <div className="resume-section name-section">
                    <h1>{name || "Your Name"}</h1>
                    <h3>{role || "Your Role"}</h3>
                </div>
                <div> className="resume-section contact-section"
                    {contact && <p>contact:{contact}</p>}
                </div>
                <div className="resume-divider"></div>
                <div> className="resume-section email-section"
                    {email && <p>email:{email}</p>}
                </div>
                {/* <div className="resume-divider"></div> */}
                <div> className="resume-section github-section"
                    {github && <p>github:{github}</p>}
                </div>
                {/* Divider */}
                <div className="resume-divider"></div>

                {/* About Section */}
                <div className="resume-section about-section">
                    <p>{about || "Your introduction will appear here..."}</p>
                </div>
                 <div className="resume-section skills-section">
                    <p>{skills || "skills you have."}</p>
                </div>
            </div>
        </div>
    );
};

export default Resume_Preview;
