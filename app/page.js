"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { LuLayoutGrid } from "react-icons/lu";
import { TbLayoutList } from "react-icons/tb";
import { IoAdd } from "react-icons/io5";
import LoadingItem from "./components/LoadingItem";
import StudentsList from "./components/StudentsList";
import GridStudentsList from "./components/GridStudentsList";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [layoutStyle, setLayoutStyle] = useState("list");
  const [students, setStudents] = useState([]);
  const getStudentsList = async () => {
    try {
      setLoading(true);
      const request = await fetch(`http://localhost:8000/students`);
      const data = request.json();
      data.then((res) => {
        setStudents(res);
      });
      setLoading(false);
      return data;
    } catch (error) {
      setConnectionError(true);
      console.error(error.message);
    }
  };
  useEffect(() => {
    getStudentsList();
  }, []);
  return (
    <main className="w-3/4 m-auto">
      <nav className="p-1 rounded-md  w-full flex justify-end items-center mt-4 border bg-gray-50  border-gray-100">
        <div className="w-40 rounded-md p-2 gap-4 flex justify-center items-center">
          <span
            onClick={() => setLayoutStyle("grid")}
            className="p-2 rounded-md border border-gray-300 hover:bg-gray-300 cursor-pointer duration-150"
          >
            <LuLayoutGrid
              size={25}
              color={layoutStyle === "grid" ? "#68bbe3" : "#000"}
            />
          </span>
          <span
            onClick={() => setLayoutStyle("list")}
            className="p-2 rounded-md border border-gray-300 hover:bg-gray-300 cursor-pointer duration-150"
          >
            <TbLayoutList
              size={25}
              color={layoutStyle === "list" ? "#68bbe3" : "#000"}
            />
          </span>
        </div>
      </nav>

      <h1 className="text-2xl text-center font-bold mt-10 text-sky-500">
        Registered Students List
      </h1>
      <section>
        {loading ? (
          <div className="flex justify-center items-center w-full">
            <LoadingItem />
          </div>
        ) : (
          <>
            {students.length !== 0 ? (
              <div className="w-full p-4">
                {layoutStyle === "list" ? (
                  <StudentsList students={students} />
                ) : layoutStyle === "grid" ? (
                  <GridStudentsList students={students} />
                ) : null}
              </div>
            ) : (
              <div className="mt-8 flex justify-center items-center flex-col gap-4">
                <p className="text-xl text-gray-400">There no students yet!!</p>
                <Link
                  className="border-2 flex justify-center gap-2 items-center text-sky-500 border-sky-500 rounded-md py-1 px-4 hover:bg-sky-500 hover:text-white duration-150"
                  href={"/add"}
                >
                  CREATE
                  <span className="font-bold">
                    <IoAdd size={20} />
                  </span>
                </Link>
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
}
