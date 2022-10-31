function Navbar() {
  return (
    <nav className="mt-4 bg-primary p-2 text-xl shadow-xl">
      <ul className="flex flex-row justify-between">
        <li className="ml-2 px-3 rounded-full bg-lightGrey hover:bg-secondary hover:text-lightGrey font-body">
          <a href="/">FEED</a>
        </li>
        <li className="ml-2 px-3 rounded-full bg-lightGrey hover:bg-teal-100 font-body">
          <a href="/">About</a>
        </li>
        <li className="ml-2 px-3 rounded-full bg-lightGrey hover:bg-teal-100 font-body">
          <a href="/">Create Post</a>
        </li>
        <li className="ml-2 px-3 rounded-full bg-lightGrey hover:bg-teal-100 font-body">
          <a href="/">Sign In</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
