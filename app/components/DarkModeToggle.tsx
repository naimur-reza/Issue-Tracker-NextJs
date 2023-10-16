"use client";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "@radix-ui/themes";
import { useTheme } from "next-themes";

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        {theme === "light" ? (
          <SunIcon height="1.3rem" width="1.3rem" />
        ) : (
          <MoonIcon height="1.3rem" width="1.3rem" />
        )}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        {themeOption.map((item) => (
          <DropdownMenu.Item onClick={() => setTheme(item.value)}>
            {item.label}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

const themeOption: { label: string; value: string }[] = [
  { label: "Dark", value: "dark" },
  { label: "Light", value: "light" },
  { label: "System", value: "system" },
];

export default DarkModeToggle;
