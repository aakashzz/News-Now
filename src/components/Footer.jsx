"use client";
import React from "react";
import Logo from "./Logo";

function Footer() {
   return (
      <footer className="h-20 bg-gray-200 w-full">
         <div className="flex justify-between items-center h-20 px-4">
            <Logo />
            <p>Privacy and Policy | Terms and Conditions</p>
            <p>All Copyright (C) 2024 Reserved</p>
         </div>
      </footer>
   );
}

export default Footer;
