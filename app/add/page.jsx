"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Message from "../components/Message";

function addStudentForm() {
  const navigateTo = useRouter();
  const [successfulMessage, setSuccessfulMessage] = useState(false);
  const [newStudent, setNewStudent] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    age: 0,
    cgpa: 0,
    profile_image: "",
  });
  const handelSubmitAnewStudent = async (e) => {
    e.preventDefault();
    try {
      const request = await fetch(`http://localhost:8000/students`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudent),
      });
      const data = request.json();
      setNewStudent({
        first_name: "",
        middle_name: "",
        last_name: "",
        age: 0,
        cgpa: 0,
        profile_image: "",
      });
      setSuccessfulMessage(true);
      setTimeout(() => {
        setSuccessfulMessage(false);
      }, 1000);
      navigateTo.push("/");
      return data;
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="w-full h-full flex justify-center items-start ">
      <Message successfulMessage={successfulMessage} />
      <form
        className="w-1/3  max-sm:w-4/5 p-4 max-sm:p-2 mt-20 rounded-md border border-gray-300 shadow-md flex flex-col justify-center items-center gap-4"
        onSubmit={handelSubmitAnewStudent}
      >
        <h1 className="text-xl my-4">Adding new student</h1>
        <div className="flex justify-center items-center gap-4 w-full ">
          <input
            onChange={(e) => {
              setNewStudent({ ...newStudent, first_name: e.target.value });
            }}
            type="text"
            placeholder="first name"
            className="p-2 rounded-md bg-gray-100 border border-gray-200 w-full"
            required
          />
          <input
            onChange={(e) => {
              setNewStudent({ ...newStudent, middle_name: e.target.value });
            }}
            type="text"
            placeholder="middle name"
            className="p-2 rounded-md bg-gray-100 border border-gray-200 w-full"
            required
          />
          <input
            onChange={(e) => {
              setNewStudent({ ...newStudent, last_name: e.target.value });
            }}
            type="text"
            placeholder="last name"
            className="p-2 rounded-md bg-gray-100 border border-gray-200 w-full"
            required
          />
        </div>
        <div className="w-full ">
          <input
            onChange={(e) => {
              setNewStudent({
                ...newStudent,
                profile_image: e.target.value,
              });
            }}
            type="url"
            placeholder="profile image url"
            className="p-2 rounded-md bg-gray-100 border border-gray-200 w-full"
          />
        </div>
        <div className="w-full flex justify-between items-center gap-4">
          <input
            onChange={(e) => {
              setNewStudent({ ...newStudent, age: e.target.value });
            }}
            type="number"
            placeholder="age"
            className="p-2 rounded-md bg-gray-100 border border-gray-200 w-full"
            required
          />
          <input
            onChange={(e) => {
              setNewStudent({ ...newStudent, cgpa: e.target.value });
            }}
            type="number"
            placeholder="CGPA"
            className="p-2 rounded-md bg-gray-100 border border-gray-200 w-full"
          />
        </div>
        <div className="w-full flex justify-between items-center gap-8 mt-2">
          <Link
            className="py-2 px-4 rounded-md hover:text-white bg-blue-100 border-blue-600 border hover:bg-blue-900 duration-150 w-full text-center cursor-pointer"
            href={"/"}
          >
            Back
          </Link>
          <input
            className="py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-900 duration-150 w-full text-white cursor-pointer"
            type="submit"
            value={"ADD"}
          />
        </div>
      </form>
    </div>
  );
}

export default addStudentForm;
