import React, { useState } from "react";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        type="button"
        className="mx-auto rounded-md bg-black bg-opacity-5 px-2 py-1"
      >
        <span className="mx-2 text-sm font-semibold">Menu</span>
      </button>
    </div>
  );
};
