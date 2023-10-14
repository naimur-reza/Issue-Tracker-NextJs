"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import DarkModeToggle from "../DarkModeToggle";

const NavBar = () => {
  const navOptions = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  const currentPath = usePathname();
  currentPath;
  return (
    <nav className="flex justify-between  border-b px-5 h-14 items-center mb-5">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <AiFillBug />
        </Link>
        <ul className="flex space-x-5">
          {navOptions.map((item) => (
            <li key={item.href}>
              <Link
                className={clsx({
                  "text-zinc-900": currentPath === item.href,
                  "text-zinc-500": currentPath !== item.href,
                  "text-zinc-500 hover:text-zinc-800 transition-colors font-semibold":
                    true,
                })}
                href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <DarkModeToggle />
    </nav>
  );
};

export default NavBar;
