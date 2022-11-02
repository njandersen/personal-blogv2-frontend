import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="mt-4 bg-white border-2 border-cyan-500 p-2 text-xl  shadow-xl shadow-slate-300">
      <ul className="flex flex-row justify-between">
        <li className="ml-2 px-3 rounded-full border-2 border-cyan-500 bg-white hover:bg-cyan-500 hover:text-white">
          <Link to=".." relative="path">
            FEED
          </Link>
        </li>
        <li className="ml-2 px-3 rounded-full border-2 border-cyan-500 bg-white hover:bg-cyan-500 hover:text-white">
          <Link to="about">About</Link>
        </li>
        <li className="ml-2 px-3 rounded-full border-2 border-cyan-500 bg-white hover:bg-cyan-500 hover:text-white">
          <Link to="create">Create Post</Link>
        </li>
        <li className="ml-2 px-3 rounded-full border-2 border-cyan-500 bg-white hover:bg-cyan-500 hover:text-white">
          <Link to="enter">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
