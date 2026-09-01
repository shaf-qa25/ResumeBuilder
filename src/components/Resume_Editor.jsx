const Resume_Editor = ({
    setName,
    setRole,
    setAbout,
    setEmail,
    setPhone,
    setLocation,
    setSkills,
    setCollege,
    setDegree,
    setYear,
    handleReset
}) => {
    return (
        <div>
            <h2>Edit Your Resume</h2>

            <label>Name</label>
            <input
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
            />

            <label>Role</label>
            <input
                type="text"
                placeholder="Enter your role"
                onChange={(e) => setRole(e.target.value)}
            />

            <label>Email</label>
            <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <label>Phone</label>
            <input
                type="text"
                placeholder="Enter your phone number"
                onChange={(e) => setPhone(e.target.value)}
            />

            <label>Location</label>
            <input
                type="text"
                placeholder="Enter your location"
                onChange={(e) => setLocation(e.target.value)}
            />

            <label>About</label>
            <textarea
                placeholder="Write something about yourself"
                onChange={(e) => setAbout(e.target.value)}
            ></textarea>

            <label>Skills</label>
            <input
                type="text"
                placeholder="HTML, CSS, JavaScript"
                onChange={(e) => setSkills(e.target.value)}
            />

            <h3>Education</h3>

            <label>College/School</label>
            <input
                type="text"
                placeholder="Enter college name"
                onChange={(e) => setCollege(e.target.value)}
            />

            <label>Degree</label>
            <input
                type="text"
                placeholder="Enter your degree"
                onChange={(e) => setDegree(e.target.value)}
            />

            <label>Year</label>
            <input
                type="text"
                placeholder="2024 - 2028"
                onChange={(e) => setYear(e.target.value)}
            />

            <button onClick={handleReset}>Reset Resume</button>
        </div>
    );
};

export default Resume_Editor;