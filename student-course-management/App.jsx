import React, { createContext, useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";


// ===============================
// Context API
// ===============================

const StudentContext = createContext();

function StudentProvider({ children }) {
  const student = {
    name: "Subhashree Panda",
    rollNo: "24CSEAI197",
    course: "B.Tech CSE-AIML",
  };

  return (
    <StudentContext.Provider value={student}>
      {children}
    </StudentContext.Provider>
  );
}


// ===============================
// Home Page
// ===============================

function Home() {
  const student = useContext(StudentContext);

  return (
    <div className="page">
      <h1>Student Course Management</h1>

      <h2>Welcome, {student.name}!</h2>

      <p>Roll Number: {student.rollNo}</p>
      <p>Course: {student.course}</p>

      <p>
        Use the navigation bar to view available courses and
        learn more about this application.
      </p>
    </div>
  );
}


// ===============================
// Courses Page
// ===============================

function Courses() {
  const courses = [
    {
      id: 1,
      name: "React JS",
      description: "Learn React components, props, state and hooks.",
    },
    {
      id: 2,
      name: "Node JS",
      description: "Learn backend development using Node.js.",
    },
  ];

  return (
    <div className="page">
      <h1>Available Courses</h1>

      {courses.map((course) => (
        <div className="course-card" key={course.id}>
          <h2>{course.name}</h2>
          <p>{course.description}</p>

          <Link to={`/course/${course.id}`}>
            View Course
          </Link>
        </div>
      ))}
    </div>
  );
}


// ===============================
// Dynamic Course Page
// ===============================

function CourseDetails() {
  const { id } = useParams();

  const courses = {
    1: {
      name: "React JS",
      description:
        "React is a JavaScript library used to create user interfaces.",
      duration: "8 Weeks",
    },

    2: {
      name: "Node JS",
      description:
        "Node.js is a JavaScript runtime used for backend development.",
      duration: "6 Weeks",
    },
  };

  const course = courses[id];

  if (!course) {
    return (
      <div className="page">
        <h1>Course Not Found</h1>
        <Link to="/courses">Back to Courses</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>{course.name}</h1>

      <p>
        <strong>Course ID:</strong> {id}
      </p>

      <p>
        <strong>Description:</strong> {course.description}
      </p>

      <p>
        <strong>Duration:</strong> {course.duration}
      </p>

      <Link to="/courses">← Back to Courses</Link>
    </div>
  );
}


// ===============================
// About Page
// ===============================

function About() {
  const student = useContext(StudentContext);

  return (
    <div className="page">
      <h1>About</h1>

      <p>
        This is a Student Course Management Application
        developed using React.
      </p>

      <h2>Student Information</h2>

      <p>Name: {student.name}</p>
      <p>Roll Number: {student.rollNo}</p>
      <p>Course: {student.course}</p>

      <h2>Technologies Used</h2>

      <ul>
        <li>React JS</li>
        <li>React Router</li>
        <li>Context API</li>
        <li>JavaScript</li>
        <li>JSX</li>
      </ul>
    </div>
  );
}


// ===============================
// Navigation Bar
// ===============================

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Student Portal</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}


// ===============================
// Main App
// ===============================

function App() {
  return (
    <BrowserRouter>
      <StudentProvider>

        <Navbar />

        <Routes>

          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Courses Route */}
          <Route path="/courses" element={<Courses />} />

          {/* Dynamic Course Routes */}
          <Route
            path="/course/:id"
            element={<CourseDetails />}
          />

          {/* About Route */}
          <Route path="/about" element={<About />} />

        </Routes>

      </StudentProvider>
    </BrowserRouter>
  );
}


// ===============================
// CSS
// ===============================

const style = document.createElement("style");

style.innerHTML = `
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f4f7fb;
    color: #333;
  }

  .navbar {
    background-color: #2563eb;
    color: white;
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbar h2 {
    margin: 0;
  }

  .navbar a {
    color: white;
    text-decoration: none;
    margin-left: 25px;
    font-weight: bold;
  }

  .navbar a:hover {
    text-decoration: underline;
  }

  .page {
    max-width: 800px;
    margin: 40px auto;
    padding: 30px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  .page h1 {
    color: #2563eb;
  }

  .course-card {
    padding: 20px;
    margin: 20px 0;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f8fafc;
  }

  .course-card h2 {
    color: #1d4ed8;
  }

  .course-card a {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 15px;
    background-color: #2563eb;
    color: white;
    text-decoration: none;
    border-radius: 5px;
  }

  .course-card a:hover {
    background-color: #1d4ed8;
  }

  li {
    margin: 10px 0;
  }
`;

document.head.appendChild(style);

export default App;
