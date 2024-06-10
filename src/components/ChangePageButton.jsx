import React from "react";
import { Link } from "react-router-dom";

function ChangePageButton() {
  return (
    <div className="flex gap-20 mt-6">
      <Link
        to="/user"
        className="py-3 px-6 bg-white border-2 border-black rounded hover:bg-pink-300 text-lg font-semibold"
      >
        Home User Sector
      </Link>
      <Link
        to="/admin"
        className="py-3 px-6 bg-white border-2 border-black rounded hover:bg-pink-300 text-lg font-semibold"
      >
        Admin Sector
      </Link>
    </div>
  );
}

export default ChangePageButton;

