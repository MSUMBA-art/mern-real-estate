import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom';


function Header() {
    return (
      <header className="bg-slate-200 shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
          <Link to="/">
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
              <span className="text-blue-500">Alexander</span>
              <span className="text-green-700">Estate</span>
            </h1>
          </Link>
          <form className="bg-slate-100 p-3 rounded-lg flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none w-24 sm:w-64"
            ></input>
            <FaSearch className="text-slate-600" />
          </form>
          <ul className="flex gap-4">
            <Link to="/">
              <li className="hidden sm:inline text-green-700 hover:underline hover:text-blue-600">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="hidden sm:inline text-green-700 hover:underline hover:text-blue-600">
                About
              </li>
            </Link>
            <Link to="sign-in">
              <li className=" text-green-700 hover:underline hover:text-blue-600">
                Sign In
              </li>
            </Link>
          </ul>
        </div>
      </header>
    );
}

export default Header;
