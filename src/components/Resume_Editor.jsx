const Resume_Editor = ({
  setName,
  setRole,
  setAbout,
  setEducation,
  setExperience,
  setSkills,
  setProjects,
}) => {
  return (
    <div>
      <h2>Edit Your Resume</h2>

      <label>Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />

      <label>Role</label>
      <input
        type="text"
        placeholder="Enter your role"
        onChange={(e) => setRole(e.target.value)}
      />

      <label>About</label>
      <textarea
        placeholder="Write something about yourself"
        onChange={(e) => setAbout(e.target.value)}
      ></textarea>

      <label>Education</label>
      <textarea
        placeholder="Enter your education details"
        onChange={(e) => setEducation(e.target.value)}
      ></textarea>

      <label>Experience</label>
      <textarea
        placeholder="Enter your work experience"
        onChange={(e) => setExperience(e.target.value)}
      ></textarea>

      <label>Skills</label>
      <input
        type="text"
        placeholder="e.g. React, JavaScript, HTML, CSS"
        onChange={(e) => setSkills(e.target.value)}
      />

      <label>Projects</label>
      <textarea
        placeholder="Enter your project details"
        onChange={(e) => setProjects(e.target.value)}
      ></textarea>
    </div>
  );
};

export default Resume_Editor;