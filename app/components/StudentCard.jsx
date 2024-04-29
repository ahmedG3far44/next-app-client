"use client";
import Link from "next/link";
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
function StudentCard({ id, fName, midName, lName, age, gpa, profile }) {
  const [fullName] = useState(`${fName} ${midName} ${lName}`);
  const [deletedMessageSuccess, setDeletedMessageSuccess] = useState(false);
  const handelDeleteStudent = async (id) => {
    try {
      const request = await fetch(
        `http://localhost:8000/students?student_id=${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = request.json();
      setDeletedMessageSuccess(true);
      setTimeout(() => {
        setDeletedMessageSuccess(false);
      }, 1000);
      return data;
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="w-64 p-4 rounded-md border border-gray-300 hover:shadow-lg hover:border-0  duration-150  flex flex-col justify-center items-center gap-2 shadow-sm">
      {deletedMessageSuccess ? (
        <div className=" p-4 duration-150  rounded-md shadow-md showUp border border-sky-500 bg-sky-100 fixed bottom-10 right-10 z-50">
          <p className="flex justify-center items-center gap-4 text-sky-800">
            <span>
              <MdDeleteOutline size={20} color="#0c4a6e" />
            </span>
            your items is deleted successfully
          </p>
        </div>
      ) : null}
      <div className="w-20 h-20  border-2 border-dashed p-2 rounded-full border-sky-500  overflow-hidden flex justify-center items-center">
        <img
          src={profile}
          className="w-full h-full object-cover rounded-full overflow-hidden"
          loading="lazy"
        />
      </div>
      <Link
        href={`/student/${id}`}
        className="text-gray-500 hover:underline hover:text-sky-500 duration-150"
      >
        {fullName}
      </Link>
      <div className="p-2 rounded-md bg-gray-200 w-full flex justify-center items-center gap-8">
        <span>AGE: {age}</span>
        <span>
          CGPA: <span className="text-sky-800">{gpa}</span>
        </span>
      </div>
      <div className="p-2 rounded-md bg-gray-100 w-full flex justify-center items-center gap-8">
        <Link
          className="w-full bg-sky-200 border border-sky-700 p-2  hover:bg-sky-300 duration-150 rounded-md text-center flex justify-center items-center"
          href={`/update/${id}`}
        >
          <span>
            <BiEditAlt size={20} color="#000" />
          </span>
        </Link>
        <button
          className="w-full bg-red-200 border border-red-700 p-2 hover:bg-red-300 duration-150 rounded-md text-center flex justify-center items-center"
          onClick={() => handelDeleteStudent(id)}
        >
          <span>
            <MdDeleteOutline size={20} color="red" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default StudentCard;
