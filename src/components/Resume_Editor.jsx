const Resume_Editor = ({ setName, setRole, setAbout, setGithub, setEmail, setPhone }) => {
    return (
        <div>
            <h2>Edit Your Resume</h2>

            <label>Name</label>
            <input type="text" placeholder="enter your name" onChange={(e) => setName(e.target.value)} />

            <label>Role</label>
            <input type="text" placeholder="Enter your role" onChange={(e) => setRole(e.target.value)} />

            <label>Email</label>
            <input type="email" placeholder="e.g. yourname@gmail.com" onChange={(e) => setEmail(e.target.value)} />

            <label>Phone Number</label>
            <input type="tel" placeholder="e.g. 9876543210" onChange={(e) => setPhone(e.target.value)} />

            <label>GitHub ID</label>
            <input type="text" placeholder="e.g. amansaifi2316" onChange={(e) => setGithub(e.target.value)} />

            <label>About</label>
            <textarea placeholder="write something about yourself" onChange={(e) => setAbout(e.target.value)}></textarea>

        </div>
    )
}

export default Resume_Editor