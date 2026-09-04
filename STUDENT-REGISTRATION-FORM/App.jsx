```jsx
import React, { useState } from "react";
import "./App.css";

function App() {
  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  // State for submitted student details
  const [student, setStudent] = useState(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    setStudent({
      name: name,
      email: email,
      course: course,
    });
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1>Student Registration Form</h1>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          {/* Email */}
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Course */}
          <label>Course:</label>
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          >
            <option value="">Select Course</option>
            <option value="B.Tech CSE">B.Tech CSE</option>
            <option value="B.Tech AIML">B.Tech AIML</option>
            <option value="B.Tech ECE">B.Tech ECE</option>
            <option value="B.Tech IT">B.Tech IT</option>
          </select>

          <button type="submit">Register</button>
        </form>

        {/* Display submitted details */}
        {student && (
          <div className="student-details">
            <h2>Registered Student Details</h2>

            <p>
              <strong>Name:</strong> {student.name}
            </p>

            <p>
              <strong>Email:</strong> {student.email}
            </p>

            <p>
              <strong>Course:</strong> {student.course}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
```
```jsx
import React, { useState } from "react";
import "./App.css";

function App() {
  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  // State for submitted student details
  const [student, setStudent] = useState(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    setStudent({
      name: name,
      email: email,
      course: course,
    });
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1>Student Registration Form</h1>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          {/* Email */}
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Course */}
          <label>Course:</label>
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          >
            <option value="">Select Course</option>
            <option value="B.Tech CSE">B.Tech CSE</option>
            <option value="B.Tech AIML">B.Tech AIML</option>
            <option value="B.Tech ECE">B.Tech ECE</option>
            <option value="B.Tech IT">B.Tech IT</option>
          </select>

          <button type="submit">Register</button>
        </form>

        {/* Display submitted details */}
        {student && (
          <div className="student-details">
            <h2>Registered Student Details</h2>

            <p>
              <strong>Name:</strong> {student.name}
            </p>

            <p>
              <strong>Email:</strong> {student.email}
            </p>

            <p>
              <strong>Course:</strong> {student.course}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
```
