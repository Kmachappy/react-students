import React from "react";
import { useState } from "react";
import "./styles.css";
import StudentData from "./studentData";
import Student from "./Student";
import Score from "./Score";

export default function App() {
  const [studentData, setStudentData] = useState({ students: StudentData });

  console.log(StudentData);
  return (
    <div className="App">
      <Student studentData={studentData} />
    </div>
  );
}
