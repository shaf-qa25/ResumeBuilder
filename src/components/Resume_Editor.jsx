// import { useState } from "react"
import TextField from "@mui/material/TextField";

const Resume_Editor = ({
  setName,
  setRole,
  setAbout,
  linkedin,
  github,
  setLinkedin,
  setGithub,
}) => {
  return (
    <div>
      <h2>Edit Your Resume</h2>

      <label>Name</label>
      <input
        type="text"
        placeholder="enter your name"
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
        placeholder="write something about yourself"
        onChange={(e) => setAbout(e.target.value)}
      ></textarea>

      <label>GitHub</label>
      <TextField
        label="GitHub Username"
        placeholder="Manasvi795"
        fullWidth
        value={github}
        onChange={(e) => setGithub(e.target.value)}
      />

      <label>LinkedIn</label>
      <TextField
        label="LinkedIn"
        placeholder="https://www.linkedin.com/in/your-id"
        fullWidth
        value={linkedin}
        onChange={(e) => setLinkedin(e.target.value)}
      />
    </div>
  );
};

export default Resume_Editor;
