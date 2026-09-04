import React from "react";

function Student(props) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "15px",
        margin: "15px",
        width: "300px",
      }}
    >
      <h2>Student Profile</h2>
      <p><b>Name:</b> {props.name}</p>
      <p><b>Course:</b> {props.course}</p>
      <p><b>College:</b> {props.college}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Student Profiles</h1>

      <Student
        name="Subhashree Panda"
        course="B.Tech CSE-AIML"
        college="GIET University"
      />

      <Student
        name="Ananya Das"
        course="B.Tech CSE"
        college="GIET University"
      />
    </div>
  );
}

export default App;