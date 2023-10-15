"use client";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button, Tooltip } from "@radix-ui/themes";
import { useTheme } from "next-themes";

const DarkModeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  console.log(theme);
  return (
    <Tooltip content={theme === "dark" ? "light" : "dark"}>
      <Button
        variant="ghost"
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }>
        {theme === "dark" ? (
          <SunIcon height="1.2rem" width="1.2rem" />
        ) : (
          <MoonIcon height="1.2rem" width="1.2rem" />
        )}
      </Button>
    </Tooltip>
  );
};

export default DarkModeToggle;
