import Link from "next/link";
import React from "react";

export const MenuButton = () => {
  return (
    <ol className="flex items-center justify-end">
      <li className="hidden lg:block">
        <Link
          href={"#"}
          className="mx-auto rounded-md bg-black bg-opacity-5 px-2 py-1 lg:bg-transparent lg:bg-opacity-100 lg:hover:bg-black lg:hover:bg-opacity-5"
        >
          <span className="mx-2 text-sm font-semibold">Shop</span>
        </Link>
      </li>
      <li className="hidden lg:block">
        <Link
          href={"#"}
          className="mx-auto rounded-md bg-black bg-opacity-5 px-2 py-1 lg:bg-transparent lg:bg-opacity-100 lg:hover:bg-black lg:hover:bg-opacity-5"
        >
          <span className="mx-2 text-sm font-semibold">Account</span>
        </Link>
      </li>
      <li>
        <button
          type="button"
          className="mx-auto rounded-md bg-black bg-opacity-5 px-2 py-1 lg:bg-transparent lg:bg-opacity-100 lg:hover:bg-black lg:hover:bg-opacity-5"
        >
          <span className="mx-2 text-sm font-semibold">Menu</span>
        </button>
      </li>
    </ol>
  );
};
