import Link from "next/link";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

function StudentsList({ students }) {
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
    <div className="flex flex-col justify-start items-center  w-full">
      {students.map((student) => {
        return (
          <div
            key={student.student_id}
            className="flex justify-around items-center max-sm:gap-4  p-4 rounded-md w-full mt-8 border border-gray-200 max-sm:flex-wrap hover:bg-gray-100 duration-150 cursor-pointer"
          >
            <div className="w-32 mr-4 border-2 border-sky-500 overflow-hidden flex justify-center items-center rounded-full">
              <img
                src={student.profile_image}
                loading="lazy"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="flex justify-start max-sm:justify-center items-center mr-8 max-sm:mr-0 gap-4 w-full text-gray-600">
              <Link
                href={`/student/${student.student_id}`}
                className="w-full text-gray-600 hover:text-sky-500 hover:underline"
              >
                {`${student.first_name} ${student.middle_name}`}
              </Link>
            </div>
            <div className="flex justify-center max-sm:justify-start  items-center gap-4 w-full">
              <span>
                AGE:<span className="ml-2">{student.age}</span>
              </span>
              <span>
                GPA:
                <span className="ml-2 text-blue-500 font-bold">
                  {student.cgpa}
                </span>
              </span>
            </div>
            <div className="ml-4 max-sm:ml-0 flex justify-center items-center gap-2 w-full">
              <Link
                href={`/update/${student.student_id}`}
                className="w-24 py-2 px-4 rounded-md max-sm:w-full bg-sky-400   text-white text-center flex justify-center items-center cursor-pointer hover:bg-sky-700 duration-150"
              >
                <span>
                  <BiEditAlt size={20} />
                </span>
              </Link>
              <span
                onClick={() => handelDeleteStudent(student.student_id)}
                className="w-24 py-2 px-4 rounded-md max-sm:w-full bg-red-400   text-red-800 flex justify-center items-center cursor-pointer hover:bg-red-500 duration-150"
              >
                <MdDeleteOutline size={20} />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StudentsList;
