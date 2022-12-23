import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <ol className="flex items-center justify-center gap-4 whitespace-nowrap px-2 text-center">
      <li className="mx-auto px-2 py-1 capitalize hover:rounded-md hover:bg-black hover:bg-opacity-5">
        <Link href="#">Model S</Link>
      </li>
      <li className="mx-auto px-2 py-1 capitalize hover:rounded-md hover:bg-black hover:bg-opacity-5">
        <Link href="#">Model 3</Link>
      </li>
      <li className="mx-auto px-2 py-1 capitalize hover:rounded-md hover:bg-black hover:bg-opacity-5">
        <Link href="#">Model X</Link>
      </li>
      <li className="mx-auto px-2 py-1 capitalize hover:rounded-md hover:bg-black hover:bg-opacity-5">
        <Link href="#">Model Y</Link>
      </li>
      <li className="mx-auto px-2 py-1 capitalize hover:rounded-md hover:bg-black hover:bg-opacity-5">
        <Link href="#">Solar Roof</Link>
      </li>
      <li className="mx-auto px-2 py-1 capitalize hover:rounded-md hover:bg-black hover:bg-opacity-5">
        <Link href="#">Solar Panels</Link>
      </li>
    </ol>
  );
};
