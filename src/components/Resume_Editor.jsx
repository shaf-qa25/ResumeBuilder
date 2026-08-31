import { useState } from "react"


const Resume_Editor = ({ setName, setRole, setHobbies, setAbout }) => {
    return (
        <div>
            <h2>Edit Your Resume</h2>

            <label>Name</label>
            <input type="text" placeholder="enter your name" onChange={(e) => setName(e.target.value)} />

            <label>Role</label>
            <input type="text" placeholder="Enter your role" onChange={(e) => setRole(e.target.value)
            } />

           <div className="input-group">
            <label>Hobbies</label>
            <input type="text" placeholder="Enter your hobbies" onChange={(e) => setHobbies(e.target.value)}/>
             </div>


            <label>About</label>
            <textarea placeholder="write something about yourself" onChange={(e) => setAbout(e.target.value)}></textarea>

        </div>
    )
}

export default Resume_Editor
