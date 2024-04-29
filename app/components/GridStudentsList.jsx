import StudentCard from "./StudentCard";

function GridStudentsList({ students }) {
  return (
    <div className="w-full flex justify-center max-lg:justify-center gap-4 max-sm:justify-center max-md:justify-center min-xl:justify-start max-lg:gap-4 items-center flex-wrap mt-10">
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
