import StudentCard from "./StudentCard";

function GridStudentsList({ students }) {
  return (
    <div className="w-full flex justify-around items-center flex-wrap mt-10">
      {students.map((student) => {
        return (
          <StudentCard
            key={student.student_id}
            id={student.student_id}
            fName={student.first_name}
            midName={student.middle_name}
            lName={student.last_name}
            age={student.age}
            gpa={student.cgpa}
            profile={student.profile_image}
          />
        );
      })}
    </div>
  );
}

export default GridStudentsList;
