import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [about, setAbout] = useState("");

  const handleFill = () => {
    setName("Priya Sharma");
    setRole("Full Stack Web Developer");
    setAbout("Passionate computer science student skilled in React, C++, and building web apps.");
  };

  const handleClear = () => {
    setName("");
    setRole("");
    setAbout("");
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', borderBottom: '2px solid #e5e7eb', pb: '16px' }}>
        <div>
          <h1 style={{ margin: 0, color: 'deepskyblue', fontSize: '28px' }}>
            Live Resume Studio
          </h1>
          <p style={{ margin: '4px 0 0 0', color: 'gray', fontSize: '14px' }}>
            Create and preview your professional resume in real-time
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            type="button"
            onClick={handleFill}
            style={{ padding: '8px 14px', backgroundColor: 'dodgerblue', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            Sample Data
          </button>
          <button 
            type="button"
            onClick={handleClear}
            style={{ padding: '8px 14px', backgroundColor: 'crimson', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            Clear
          </button>
          <button 
            type="button"
            onClick={() => window.print()}
            style={{ padding: '8px 14px', backgroundColor: 'mediumseagreen', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            Print PDF
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div style={{ border: '1px solid #e5e7eb', padding: '20px', borderRadius: '8px', backgroundColor: '#fff' }}>
          <h3 style={{ marginTop: 0, color: '#333' }}>Editor</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <label style={{ fontSize: '13px', fontWeight: 'bold', display: 'block', marginBottom: '4px' }}>Full Name</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter Name"
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
              />
            </div>
            <div>
              <label style={{ fontSize: '13px', fontWeight: 'bold', display: 'block', marginBottom: '4px' }}>Role / Job Title</label>
              <input 
                type="text" 
                value={role} 
                onChange={(e) => setRole(e.target.value)} 
                placeholder="Enter Role"
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
              />
            </div>
            <div>
              <label style={{ fontSize: '13px', fontWeight: 'bold', display: 'block', marginBottom: '4px' }}>About</label>
              <textarea 
                value={about} 
                onChange={(e) => setAbout(e.target.value)} 
                placeholder="Brief summary..."
                rows="4"
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
              />
            </div>
          </div>
        </div>

        <div style={{ border: '1px solid #e5e7eb', padding: '20px', borderRadius: '8px', backgroundColor: '#f9fafb' }}>
          <h3 style={{ marginTop: 0, color: '#333' }}>Live Preview</h3>
          <div style={{ padding: '16px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '6px' }}>
            <h2 style={{ margin: '0 0 4px 0', color: 'deepskyblue' }}>{name || "Your Name"}</h2>
            <h4 style={{ margin: '0 0 12px 0', color: '#666' }}>{role || "Your Role"}</h4>
            <p style={{ margin: 0, color: '#444', fontSize: '14px', lineHeight: '1.5' }}>
              {about || "Your short summary will appear here..."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;