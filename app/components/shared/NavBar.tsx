"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import DarkModeToggle from "../DarkModeToggle";
import { useSession } from "next-auth/react";
import { Avatar, DropdownMenu, Flex } from "@radix-ui/themes";

const NavBar = () => {
  const navOptions = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];
  const currentPath = usePathname();

  const { data: session } = useSession();

  return (
    <nav className="flex justify-between  border-b dark:border-b-zinc-700 px-5 h-14 items-center mb-5">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <AiFillBug />
        </Link>
        <ul className="flex space-x-5">
          {navOptions.map((item) => (
            <li key={item.href}>
              <Link
                className={clsx({
                  "text-zinc-900 dark:text-zinc-400": currentPath === item.href,
                  "text-zinc-500": currentPath !== item.href,
                  "text-zinc-500 hover:text-zinc-800 transition-colors font-medium":
                    true,
                })}
                href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Flex align={"center"} gap={"4"}>
        <DarkModeToggle />
        {session?.user ? (
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Avatar
                radius="full"
                className="cursor-pointer"
                src={session?.user?.image!}
                fallback="A"
              />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item disabled>
                {session.user.email}
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Link href={"/api/auth/signout"}>Logout</Link>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        ) : (
          <Link href={"/api/auth/signin"}>Login</Link>
        )}
      </Flex>
    </nav>
  );
};

export default NavBar;
