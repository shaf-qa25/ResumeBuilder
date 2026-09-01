import { useState } from "react"


const Resume_Editor = ({ setName, setRole, setAbout }) => {
    return (
        <div>
            <h2>Edit Your Resume</h2>

            <label>Name</label>
            <input type="text" placeholder="enter your name" onChange={(e) => setName(e.target.value)} />

            <label>Role</label>
            <input type="text" placeholder="Enter your role" onChange={(e) => setRole(e.target.value)} />

             <label>Email</label>
             <input type="email" placeholder="📧 Enter your email " onChange={(e)=>setRole(e.target.value)}/>


              <label>GitHub</label>
              <input type="text" placeholder="Enter GitHub Username" onChange={(e)=>setRole(e.target.value)}/>

            <label>About</label>
            <textarea placeholder="write something about yourself" onChange={(e) => setAbout(e.target.value)}></textarea>

        </div>
    )
}

export default Resume_Editor
