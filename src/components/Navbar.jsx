import React from "react";
import Logo from "./Logo";
function Navbar() {
  return (
    <>
      <nav className="h-20 shadow flex justify-between px-4 items-center">
        <div className="space-x-1">
          <label htmlFor="country" className="text-lg">
            country
          </label>
          <select
            name=""
            id="country"
            className="border rounded-lg py-1 px-1 outline-none"
          >
            <option value="">India</option>
            <option value="">USA</option>
            <option value="">Russia</option>
          </select>
        </div>
        <div>
          <Logo />
        </div>
        <div className="">
          <div className="space-x-1">
            <label htmlFor="lang" className="text-lg">
              lang
            </label>
            <select
              name=""
              id="lang"
              className="border rounded-lg py-1 px-1 outline-none"
            >
              <option value="">India</option>
              <option value="">USA</option>
              <option value="">Russia</option>
            </select>
          </div>
          <div>
            
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
