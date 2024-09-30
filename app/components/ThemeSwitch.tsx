import { Theme, useTheme } from "remix-themes";
import { Switch } from "./ui/switch";

export default function ThemeSwitch() {
  const [theme, setTheme] = useTheme(); // Correct usage of useTheme hook

  const toggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };

  return (
    <Switch
      checked={theme === Theme.DARK} // Reflect current theme in switch state
      onCheckedChange={toggleTheme} // Toggle theme when switch is toggled
    />
  );
}
