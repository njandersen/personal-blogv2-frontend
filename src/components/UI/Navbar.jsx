function Navbar() {
  return (
    <nav className="mt-4 bg-teal-400 p-2 text-xl">
      <ul className="flex flex-row justify-between">
        <li className="ml-2 p-3 border-2 rounded-full bg-white hover:bg-teal-100">
          <a href="/">FEED</a>
        </li>
        <li className="ml-2 p-3 border-2 rounded-full bg-white hover:bg-teal-100">
          <a href="/">About</a>
        </li>
        <li className="ml-2 p-3 border-2 rounded-full bg-white hover:bg-teal-100">
          <a href="/">Create Post</a>
        </li>
        <li className="ml-2 p-3 border-2 rounded-full bg-white hover:bg-teal-100">
          <a href="/">Sign In</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
