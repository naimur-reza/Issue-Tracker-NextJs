import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import React, { createContext, useState } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <Button
      onClick={() => {
        setDarkMode(!isDarkMode);
      }}
      variant="ghost"
      className="">
      {isDarkMode ? (
        <SunIcon height="1.2rem" width="1.2rem" />
      ) : (
        <MoonIcon height="1.2rem" width="1.2rem" />
      )}{" "}
    </Button>
  );
};

export default DarkModeToggle;
