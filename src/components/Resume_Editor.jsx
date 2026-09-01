import { useState } from "react"


const Resume_Editor = ({ setName, setRole, setAbout, setskills }) => {
    return (
        <div>
            <h2>Edit Your Resume</h2>

            <label>Name</label>
            <input type="text" placeholder="enter your name" onChange={(e) => setName(e.target.value)} />

            <label>Role</label>
            <input type="text" placeholder="Enter your role" onChange={(e) => setRole(e.target.value)} />

            <label>About</label>
            <textarea placeholder="write something about yourself" onChange={(e) => setAbout(e.target.value)}></textarea>

            <label>skills</label>
            <textarea placeholder="list your skills" onChange={(e) => setskills(e.target.value)}></textarea>
        </div>
    )
}

export default Resume_Editor
