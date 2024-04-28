"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function StudentInfo() {
  const { student_id } = useParams();
  const [studentInfo, setStudent] = useState({});
  const getOneStudentInfo = async (id) => {
    try {
      const request = await fetch(`http://localhost:8000/students/${id}`);
      const student = request.json();
      student.then((res) => {
        setStudent(res);
      });
      return student;
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getOneStudentInfo(student_id);
  }, [student_id]);
  return (
    <section className="w-full h-full flex justify-center items-center  m-auto p-4 ">
      <div className="w-96 p-4 mt-20 rounded-md border border-gray-400 flex flex-col justify-center items-center gap-4 text-gray-600">
        <div className="w-20 h-20 p-2 overflow-hidden rounded-full  border-2 border-sky-500">
          <img
            src={studentInfo.profile_image}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <h1>First Name:{studentInfo.first_name}</h1>
        <h1>Middle Name: {studentInfo.middle_name}</h1>
        <h1>Last Name:{studentInfo.last_name}</h1>
        <span className="p-2 font-bold rounded-md w-full bg-gray-100 text-center">
          ID:{studentInfo.student_id}
        </span>
        <div className="w-full p-2 bg-gray-100 rounded-md flex justify-center items-center gap-4 ">
          <h1>Age:{studentInfo.age}</h1>
          <h1>GPA:{studentInfo.cgpa}</h1>
        </div>
        {studentInfo.cgpa < 2.0 ? (
          <h1 className="text-red-500 text-2xl font-bold">Field</h1>
        ) : studentInfo.cgpa > 2.0 && studentInfo.cgpa < 2.5 ? (
          <h1 className="text-orange-500 text-2xl font-bold">Bad Grades</h1>
        ) : studentInfo.cgpa > 2.5 && studentInfo.cgpa < 3.0 ? (
          <h1 className="text-purple-500 text-2xl font-bold">Good Grades</h1>
        ) : studentInfo.cgpa > 3.0 && studentInfo.cgpa <= 3.5 ? (
          <h1 className="text-sky-500 text-2xl font-bold">Very Good Grades</h1>
        ) : studentInfo.cgpa > 3.5 ? (
          <h1 className="text-green-500 text-2xl font-bold">
            EXcellent Grades
          </h1>
        ) : null}
      </div>
    </section>
  );
}

export default StudentInfo;
