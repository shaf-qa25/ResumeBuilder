import { useState } from "react"


const Resume_Editor = ({ setName, setRole, setAbout, setContact, setEmail, setSkills, setGithub}) => {
    return (
        <div>
            <h2>Edit Your Resume</h2>

            <label>Name</label>
            <input type="text" placeholder="enter your name" onChange={(e) => setName(e.target.value)} />

            <label>Role</label>
            <input type="text" placeholder="Enter your role" onChange={(e) => setRole(e.target.value)} />

            <label>Contact</label>
            <input type="text" placeholder="Enter your Contact" onChange={(e) => setContact(e.target.value)} />

            <label>Email</label>
            <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />

            <label>Skills</label>
            <input type="text" placeholder="eg. node.js, python, css, etc." onChange={(e) => setSkills(e.target.value)} />

            <label>Github</label>
            <input type="text" placeholder="Github Profile link" onChange={(e) => setGithub(e.target.value)} />

            <label>About</label>
            <textarea placeholder="write something about yourself" onChange={(e) => setAbout(e.target.value)}></textarea>

        </div>
    )
}

export default Resume_Editor
