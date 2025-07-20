import React, { useState } from "react";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="px-[8%] py-4 text-white border-b border-[--thin-border] bg-[#111] z-[99999]">
        <div className="flex items-center justify-between transition">
          <ul className="hidden gap-6 text-sm font-light md:flex">
            <li className="text-lg font-semibold cursor-pointer transition hover:text-red-400">
              Home
            </li>
            <li className="text-lg font-semibold cursor-pointer transition hover:text-red-400">
              About
            </li>
            <li className="text-lg font-semibold cursor-pointer transition hover:text-red-400">
              Portfolio
            </li>
            <li className="text-lg font-semibold transition cursor-pointer hover:text-red-400">
              Blog
            </li>
            <li className="text-lg font-semibold transition cursor-pointer hover:text-red-400">
              Contact
            </li>
          </ul>

          <div className="text-4xl font-bold tracking-wide cursor-pointer font-bricolage">
            <span className="text-red-500">Port</span>Lify
          </div>

          <div className="hidden gap-4 text-sm font-light md:flex">
            <i className="transition cursor-pointer bi bi-instagram text-x1 hover:text-red-400"></i>
            <i className="transition cursor-pointer bi bi-twitter-x text-x1 hover:text-red-400"></i>
            <i className="transition cursor-pointer bi bi-github text-x1 hover:text-red-400"></i>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <i
                className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"} text-2xl`}
              ></i>
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden mt-4 flex flex-col gap-4 text-sm font-light z-[9999]">
              <ul className="flex flex-col gap-4">
                <li className="text-lg font-semibold text-red-500 cursor-pointer">
                  Home
                </li>
                <li className="text-lg font-semibold transition cursor-pointer hover:text-red-400">
                  About
                </li>
                <li className="text-lg font-semibold transition cursor-pointer hover:text-red-400">
                  Portfolio
                </li>
                <li className="text-lg font-semibold transition cursor-pointer hover:text-red-400">
                  Blog
                </li>
                <li className="text-lg font-semibold transition cursor-pointer hover:text-red-400">
                  Contact
                </li>
              </ul>

              <div className="flex gap-4 mt-4">
                <i className="transition cursor-pointer bi bi-instagram text-x1 hover:text-red-400"></i>
                <i className="transition cursor-pointer bi bi-twitter-x text-x1 hover:text-red-400"></i>
                <i className="transition cursor-pointer bi bi-github text-x1 hover:text-red-400"></i>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Nav;
