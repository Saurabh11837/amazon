import React from "react";

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="bg-black text-white px-6 py-2 flex items-center justify-between border-b border-red-900">
          {/* Logo */}
          <div className="text-2xl font-bold text-red-600">
            HDHub<span className="text-white">4u</span>
          </div>

          {/* as */}
          <div className="space-x-6">
            <a href="/disclaimer" className="hover:text-red-400">
              Disclaimer
            </a>
            <a href="/how-to-download" className="hover:text-red-400">
              How To Download ?
            </a>
            <a href="/join" className="hover:text-red-400">
              Join Our Group !
            </a>
            <a href="/movie-request" className="hover:text-red-400">
              Movie Request Page
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
