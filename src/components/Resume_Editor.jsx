import { useState } from "react";

const Resume_Editor = ({
  setName,
  setRole,
  setAbout,

  skills,
  setSkills,

  education,
  setEducation,

  experience,
  setExperience,

  projects,
  setProjects,

  contact,
  setContact,

  social,
  setSocial,

  achievements,
  setAchievements,
}) => {

  // Skill input
  const [skillInput, setSkillInput] = useState("");

  // Education input
  const [degree, setDegree] = useState("");
  const [college, setCollege] = useState("");
  const [educationYear, setEducationYear] = useState("");

  // Experience input
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [duration, setDuration] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  // Project input
  const [projectName, setProjectName] = useState("");
  const [projectTech, setProjectTech] = useState("");
  const [projectDescription, setProjectDescription] =
    useState("");

  // Achievement input
  const [achievementInput, setAchievementInput] =
    useState("");

  // ADD SKILL
  const addSkill = () => {
    const newSkill = skillInput.trim();

    if (!newSkill) return;

    if (skills.includes(newSkill)) return;

    setSkills([...skills, newSkill]);

    setSkillInput("");
  };

  // ADD EDUCATION
  const addEducation = () => {
    if (!degree || !college || !educationYear) return;

    setEducation([
      ...education,
      {
        degree,
        college,
        year: educationYear,
      },
    ]);

    setDegree("");
    setCollege("");
    setEducationYear("");
  };

  // ADD EXPERIENCE
  const addExperience = () => {
    if (!jobTitle || !company) return;

    setExperience([
      ...experience,
      {
        title: jobTitle,
        company,
        duration,
        description: jobDescription,
      },
    ]);

    setJobTitle("");
    setCompany("");
    setDuration("");
    setJobDescription("");
  };

  // ADD PROJECT
  const addProject = () => {
    if (!projectName) return;

    setProjects([
      ...projects,
      {
        name: projectName,
        tech: projectTech,
        description: projectDescription,
      },
    ]);

    setProjectName("");
    setProjectTech("");
    setProjectDescription("");
  };

  // ADD ACHIEVEMENT
  const addAchievement = () => {
    const achievement = achievementInput.trim();

    if (!achievement) return;

    setAchievements([
      ...achievements,
      achievement,
    ]);

    setAchievementInput("");
  };

  return (
    <div className="editor-content">

      {/* HEADER */}
      <div className="editor-heading">
        <div className="editor-icon">✨</div>

        <div>
          <h2>Edit Your Resume</h2>
          <p>
            Build your professional profile step by step.
          </p>
        </div>
      </div>

      {/* PERSONAL INFORMATION */}
      <div className="form-group">
        <label>👤 Full Name</label>

        <input
          type="text"
          placeholder="Enter your full name"
          onChange={(e) =>
            setName(e.target.value)
          }
        />
      </div>

      <div className="form-group">
        <label>💼 Professional Role</label>

        <input
          type="text"
          placeholder="e.g. Frontend Developer"
          onChange={(e) =>
            setRole(e.target.value)
          }
        />
      </div>

      <div className="form-group">
        <label>📝 About You</label>

        <textarea
          placeholder="Write a short introduction about yourself..."
          onChange={(e) =>
            setAbout(e.target.value)
          }
        ></textarea>
      </div>

      {/* SKILLS */}
      <div className="form-group">
        <label>🛠️ Skills</label>

        <div className="skill-input-row">
          <input
            type="text"
            placeholder="e.g. React"
            value={skillInput}
            onChange={(e) =>
              setSkillInput(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addSkill();
              }
            }}
          />

          <button
            type="button"
            className="add-skill-button"
            onClick={addSkill}
          >
            + Add
          </button>
        </div>

        <div className="skill-tags">
          {skills.map((skill, index) => (
            <span
              className="skill-tag"
              key={index}
            >
              {skill}

              <button
                type="button"
                onClick={() => {
                  setSkills(
                    skills.filter(
                      (_, i) => i !== index
                    )
                  );
                }}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* EDUCATION */}
      <div className="form-group">
        <label>🎓 Education</label>

        <input
          type="text"
          placeholder="Degree / Course"
          value={degree}
          onChange={(e) =>
            setDegree(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="College / University"
          value={college}
          onChange={(e) =>
            setCollege(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Year"
          value={educationYear}
          onChange={(e) =>
            setEducationYear(e.target.value)
          }
        />

        <button
          type="button"
          className="secondary-button"
          onClick={addEducation}
        >
          + Add Education
        </button>

        {education.map((item, index) => (
          <div
            className="added-item"
            key={index}
          >
            <strong>{item.degree}</strong>
            <span>{item.college}</span>
            <small>{item.year}</small>
          </div>
        ))}
      </div>

      {/* EXPERIENCE */}
      <div className="form-group">
        <label>💼 Experience</label>

        <input
          type="text"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) =>
            setJobTitle(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) =>
            setCompany(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Duration"
          value={duration}
          onChange={(e) =>
            setDuration(e.target.value)
          }
        />

        <textarea
          placeholder="Describe your work..."
          value={jobDescription}
          onChange={(e) =>
            setJobDescription(e.target.value)
          }
        ></textarea>

        <button
          type="button"
          className="secondary-button"
          onClick={addExperience}
        >
          + Add Experience
        </button>
      </div>

      {/* PROJECTS */}
      <div className="form-group">
        <label>🚀 Projects</label>

        <input
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) =>
            setProjectName(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Technologies Used"
          value={projectTech}
          onChange={(e) =>
            setProjectTech(e.target.value)
          }
        />

        <textarea
          placeholder="Describe your project..."
          value={projectDescription}
          onChange={(e) =>
            setProjectDescription(e.target.value)
          }
        ></textarea>

        <button
          type="button"
          className="secondary-button"
          onClick={addProject}
        >
          + Add Project
        </button>
      </div>

      {/* CONTACT */}
      <div className="form-group">
        <label>📞 Contact</label>

        <input
          type="email"
          placeholder="Email"
          value={contact.email}
          onChange={(e) =>
            setContact({
              ...contact,
              email: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Phone"
          value={contact.phone}
          onChange={(e) =>
            setContact({
              ...contact,
              phone: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Location"
          value={contact.location}
          onChange={(e) =>
            setContact({
              ...contact,
              location: e.target.value,
            })
          }
        />
      </div>

      {/* SOCIAL LINKS */}
      <div className="form-group">
        <label>🔗 Social Links</label>

        <input
          type="text"
          placeholder="LinkedIn URL"
          value={social.linkedin}
          onChange={(e) =>
            setSocial({
              ...social,
              linkedin: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="GitHub URL"
          value={social.github}
          onChange={(e) =>
            setSocial({
              ...social,
              github: e.target.value,
            })
          }
        />
      </div>

      {/* ACHIEVEMENTS */}
      <div className="form-group">
        <label>🏆 Achievements</label>

        <div className="skill-input-row">
          <input
            type="text"
            placeholder="e.g. SIH Finalist"
            value={achievementInput}
            onChange={(e) =>
              setAchievementInput(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addAchievement();
              }
            }}
          />

          <button
            type="button"
            className="add-skill-button"
            onClick={addAchievement}
          >
            + Add
          </button>
        </div>

        <div className="skill-tags">
          {achievements.map(
            (achievement, index) => (
              <span
                className="skill-tag"
                key={index}
              >
                {achievement}

                <button
                  type="button"
                  onClick={() => {
                    setAchievements(
                      achievements.filter(
                        (_, i) =>
                          i !== index
                      )
                    );
                  }}
                >
                  ×
                </button>
              </span>
            )
          )}
        </div>
      </div>

    </div>
  );
};

export default Resume_Editor;