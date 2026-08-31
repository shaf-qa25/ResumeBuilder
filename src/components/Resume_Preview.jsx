const Resume_Preview = ({ resume }) => {

    return (
        <div className="resume">

            <div className="resume-content">

                {/* HEADER */}
                <div className="resume-header">

                    <h1>
                        {resume.name || "Your Name"}
                    </h1>

                    <h2>
                        {resume.role || "Professional Role"}
                    </h2>

                    <div className="contact-info">

                        {resume.email && (
                            <span>{resume.email}</span>
                        )}

                        {resume.phone && (
                            <span>{resume.phone}</span>
                        )}

                        {resume.location && (
                            <span>{resume.location}</span>
                        )}

                    </div>

                </div>

                {/* ABOUT */}
                {resume.about && (
                    <section>
                        <h3>PROFILE</h3>
                        <p>{resume.about}</p>
                    </section>
                )}

                {/* SKILLS */}
                {resume.skills.length > 0 && (
                    <section>
                        <h3>SKILLS</h3>

                        <div className="resume-skills">
                            {resume.skills.map((skill, index) => (
                                <span key={index}>
                                    {skill}
                                </span>
                            ))}
                        </div>

                    </section>
                )}

                {/* EDUCATION */}
                {resume.education && (
                    <section>
                        <h3>EDUCATION</h3>

                        <p className="pre-line">
                            {resume.education}
                        </p>

                    </section>
                )}

                {/* EXPERIENCE */}
                {resume.experience && (
                    <section>
                        <h3>EXPERIENCE</h3>

                        <p className="pre-line">
                            {resume.experience}
                        </p>

                    </section>
                )}

                {/* PROJECTS */}
                {resume.projects && (
                    <section>
                        <h3>PROJECTS</h3>

                        <p className="pre-line">
                            {resume.projects}
                        </p>

                    </section>
                )}

            </div>

        </div>
    );
};

export default Resume_Preview;
