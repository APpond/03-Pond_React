import React from "react";
import { Link } from "react-router-dom";

function NavHomeOwner() {
  return (
    <div className="flex justify-end items-center h-16 border-b-4 border-pink-700">
      <div className="mr-6 gap-6 flex">
        <Link to="/" className="font-bold text-xl hover:text-pink-700">
          Home
        </Link>
        <Link to="/owner" className="font-bold text-xl hover:text-pink-700">
          Owner
        </Link>
      </div>
    </div>
  );
}

export default NavHomeOwner;

