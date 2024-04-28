import Link from "next/link";
import { IoAdd } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";

function Header() {
  return (
    <header className="p-4 bg-gray-100 w-full flex justify-around items-center sticky top-0 left-0 shadow-sm z-50">
      <div className="flex justify-center items-center gap-2">
        <img
          src={"https://www.svgrepo.com/show/373553/docker.svg"}
          width={50}
          height={50}
        />
        <Link
          href={"/"}
          className="text-3xl font-bold text-sky-500 cursor-pointer"
        >
          DOCKER
        </Link>
      </div>
      <div className="flex justify-center items-center gap-4">
        <Link
          className="hover:text-sky-500 duration-150 flex justify-center items-center gap-2"
          href={"/"}
        >
          <span>
            <RiHome2Line size={20} />
          </span>
          Home
        </Link>
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
    </header>
  );
}

export default Header;
