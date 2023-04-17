import React from 'react';
import 'tailwindcss/tailwind.css';


function Navbar() {
  return (
    <nav className="">
      <div className="">
        <div className="">
          <div className="flex justify-between">
            <a href="/" className="px-4">Home</a>
            <a href="/" className="px-4">About Me</a>
            <a href="/" className="px-4">My Projects</a>
            <a href="/" className="px-4">Contact Me</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
