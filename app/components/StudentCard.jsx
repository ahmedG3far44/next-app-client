import Link from "next/link";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
function StudentCard({ id, fName, midName, lName, age, gpa, profile }) {
  const fullName = `${fName} ${midName} ${lName}`;
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
      return data;
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="w-64 p-4 rounded-md border border-gray-300 hover:bg-gray-100 hover:scale-105 duration-150 flex flex-col justify-center items-center gap-2 shadow-sm">
      <div className="w-20  border-2 rounded-full border-sky-500  overflow-hidden flex justify-center items-center">
        <img
          src={profile}
          className="w-full h-full object-cover"
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
