import { useState } from "react"


const Resume_Editor = ({ setName, setRole, setAbout,setstudentno,setcollegemail,setcollege,setsociety, }) => {
    return (
        <div>
            <h2>Edit Your Resume</h2>

            <label>Name</label>
            <input type="text" placeholder="enter your name" onChange={(e) => setName(e.target.value)} />

            <label>Student Number</label>
            <input  type="text" placeholder="enter your student number" onChange={(e)=> setstudentno(e.target.value)} />

            <label>College Mail</label>
            <input type="text" placeholder="enter your college mail" onChange={(e)=> setcollegemail(e.target.value)} />

            <label>Society</label>
            <input type="text" placeholder="enter your society name" onChange={(e)=> setsociety (e.target.value)} />

            <label>Role</label>
            <input type="text" placeholder="Enter your role" onChange={(e) => setRole(e.target.value)} />

            <label>College</label>
            <input type="text" placeholder="enter your college" onChange={(e)=> setcollege (e.target.value)} />

            <label>About</label>
            <textarea placeholder="write something about yourself" onChange={(e) => setAbout(e.target.value)}></textarea>

        </div>
    )
}

export default Resume_Editor
