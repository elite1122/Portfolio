
const Navbar = () => {
  return (
    <div className="navbar sticky bg-[#0D2438] top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#1e3950] rounded-box z-[1] mt-3 w-52 shadow text-gray-300">
            <li><a>Home</a></li>
            <li><a>About Me</a></li>
            <li><a>Skills</a></li>
            <li><a>Education</a></li>
            <li><a>Projects</a></li>
            <li><a>Contact Me</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-green-500 font-bold">ELITE</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-gray-300">
          <li><a>Home</a></li>
          <li><a>About Me</a></li>
          <li><a>Skills</a></li>
          <li><a>Education</a></li>
          <li><a>Projects</a></li>
          <li><a>Contact Me</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary bg-[#0891B2] rounded-2xl border-none">Download CV</a>
      </div>
    </div>
  );
};

export default Navbar;