import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";
const navOptions = [
  { label: "Issues", href: "/" },
  { label: "Dashboard", href: "/" },
];
const NavBar = () => {
  return (
    <nav className="flex space-x-5 border-b px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-5">
        {navOptions.map((item) => (
          <li key={item.href}>
            <Link
              className="text-zinc-500 hover:text-zinc-800 transition-colors"
              href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
