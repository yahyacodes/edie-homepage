function Navbar() {
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#Home" className="flex items-center">
          <span className="self-center text-xl whitespace-nowrap dark:text-dark font-normal">
            Edie
          </span>
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-dark rounded-lg md:hidden
        focus:outline-none "
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 
            1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            className="flex flex-col p-4 mt-4 border border-grey-100 rounded-lg
          md:flex-row md:space-x-8 md:mt-0 md:font-medium md:border-0 md:bg-dark dark:border-grey-700"
          >
            <li>
              <a
                href="#Home"
                className="block py=2 pl-3 pr-4 text-dark rounded md:border-0 md:p-0 "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#Services"
                className="block py=2 pl-3 pr-4 text-dark rounded md:border-0 md:p-0 "
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#Our-work"
                className="block py=2 pl-3 pr-4 text-dark rounded md:border-0 md:p-0 "
              >
                Our Work
              </a>
            </li>
            <li>
              <a
                href="#Clients"
                className="block py=2 pl-3 pr-4 text-dark rounded md:border-0 md:p-0 "
              >
                Clients
              </a>
            </li>
            <li>
              <a
                href="#Contacts"
                className="block py=2 pl-3 pr-4 text-dark rounded md:border-0 md:p-0 "
              >
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
