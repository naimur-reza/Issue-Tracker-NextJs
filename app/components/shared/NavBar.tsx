"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import { DarkModeToggle } from "@/app/components";
import { useSession } from "next-auth/react";
import { Avatar, DropdownMenu, Flex, Text } from "@radix-ui/themes";
import { Skeleton } from "@/app/components";

const NavBar = () => {
  const navOptions = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];
  const currentPath = usePathname();

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
                  "text-zinc-200 ": currentPath === item.href,
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
        <AuthStatus />
      </Flex>
    </nav>
  );
};

export default NavBar;

const AuthStatus = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return <Skeleton width="3rem" />;

  if (status === "unauthenticated")
    return <Link href={"/api/auth/signin"}>Login</Link>;

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Avatar
          radius="full"
          className="cursor-pointer"
          src={session?.user?.image!}
          fallback="?"
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item disabled>
          <Text size="2"> {session?.user?.email}</Text>
        </DropdownMenu.Item>

        <DropdownMenu.Item>
          <Link href={"/api/auth/signout"}>Logout</Link>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
