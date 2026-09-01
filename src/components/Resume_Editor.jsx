import { useState } from "react"


const Resume_Editor = ({ setName, setRole, setAbout }) => {
    return (
        <div>
            <h2>Build Your Resume</h2>

            <label>Name</label>
            <input type="text" placeholder="Enter your full name" onChange={(e) => setName(e.target.value)} />

            <label>Role</label>
            <input type="text" placeholder="e.g. Frontend Developer" onChange={(e) => setRole(e.target.value)} />

            <label>About</label>
            <textarea placeholder="Write a short introduction about yourself..." onChange={(e) => setAbout(e.target.value)}></textarea>

        </div>
    )
}

export default Resume_Editor
