import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="mt-4 bg-slate-500 p-2 text-xl text-white shadow-xl shadow-slate-300">
      <ul className="flex flex-row justify-between">
        <li className="ml-2 px-3 rounded-full border-2 bg-slate-500 hover:bg-white hover:text-black">
          <Link to=".." relative="path">
            FEED
          </Link>
        </li>
        <li className="ml-2 px-3 rounded-full border-2 bg-slate-500 hover:bg-white hover:text-black">
          <Link to="about">About</Link>
        </li>
        <li className="ml-2 px-3 rounded-full border-2 bg-slate-500 hover:bg-white hover:text-black">
          <Link to="create">Create Post</Link>
        </li>
        <li className="ml-2 px-3 rounded-full border-2 bg-slate-500 hover:bg-white hover:text-black">
          <Link to="enter">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
