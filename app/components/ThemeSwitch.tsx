import { Theme, useTheme } from "remix-themes";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

export default function ThemeSwitch() {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        {theme === Theme.DARK ? (
          <FaRegMoon size="30px" />
        ) : (
          <FaRegSun size="30px" />
        )}
      </button>
    </div>
  );
}
