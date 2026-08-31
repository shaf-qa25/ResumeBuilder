import { useState } from "react"


const Resume_Editor = ({ setName, setRole, setAbout ,setSkills}) => {
    return (
        <div>
            <h2>Edit Your Resume</h2>

            <label>Name</label>
            <input type="text" placeholder="enter your name" onChange={(e) => setName(e.target.value)} />

            <label>Role</label>
            <input type="text" placeholder="Enter your role" onChange={(e) => setRole(e.target.value)} />

            <label>About</label>
            <textarea placeholder="write something about yourself" onChange={(e) => setAbout(e.target.value)}></textarea>
            <label>Skills</label>
            <input type="text" placeholder="Enter your skills" onChange={(e) => setSkills(e.target.value.split(",").map((s) => s.trim()))} />
            

        </div>
    )
}

export default Resume_Editor
