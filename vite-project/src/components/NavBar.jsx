import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="w-full bg-gray-800 text-white py-4 px-6 fixed top-0 left-0 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">My App</h1>
      <nav className="flex gap-6">
        <Link to="/" className="text-lg font-semibold hover:text-blue-400">Home</Link>
        <Link to="/todo" className="text-lg font-semibold hover:text-blue-400">To-Do List</Link>
      </nav>
    </header>
  );
};

export default NavBar;
