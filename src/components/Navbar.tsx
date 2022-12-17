import React, { useState } from "react";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <button onClick={() => setShowMenu(!showMenu)} type="button">
        Menu
      </button>
    </div>
  );
};
