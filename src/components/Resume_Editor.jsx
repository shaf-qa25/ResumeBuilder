import { useState } from "react"


const Resume_Editor = ({ setName, setRole, setAbout, setPhone, setSkills, setEmail }) => {
    return (
        <div>
            <h2>Edit Your Resume</h2>

            <label>Name</label>
            <input type="text" placeholder="enter your name" onChange={(e) => setName(e.target.value)} />

            <label>Role</label>
            <input type="text" placeholder="Enter your role" onChange={(e) => setRole(e.target.value)} />

            <label>About</label>
            <textarea placeholder="write something about yourself" onChange={(e) => setAbout(e.target.value)}></textarea>

            <label>Phone</label>
            <input type="tel" placeholder="+91 9068411111" onChange={(e) => setPhone(e.target.value)}></input>

            <label>Skills</label>
            <input type="text" placeholder="Javascript, raect, figma..." onChange={(e) => setSkills(e.target.value)}></input>

            <label>Email</label>
            <input type="email" placeholder="yourname@gmail.com" onChange={(e) => setEmail(e.target.value)}></input>
        </div>
    )
}

export default Resume_Editor
