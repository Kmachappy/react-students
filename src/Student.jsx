import Score from "./Score";
const Student = ({ studentData }) => {
  // console.log("inside student comp:", studentData);
  // console.log(studentData.students);
  return (
    <div className="student-area">
      {studentData.students.map((student, index) => {
        return (
          <div className={`student-card${index + 1} student-card`}>
            <h1>{student.name}</h1>
            <p>{student.bio}</p>
            {student.scores.map((score) => {
              return <Score date={score.date} score={score.score} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Student;
