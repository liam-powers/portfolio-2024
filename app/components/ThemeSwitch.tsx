import { Theme, useTheme } from "remix-themes";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

export default function ThemeSwitch() {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };

  const iconStyles = "w-8 md:w-10 h-8 md:h-10";

  return (
    <div>
      <button onClick={toggleTheme}>
        {theme === Theme.DARK ? (
          <FaRegMoon className={iconStyles} />
        ) : (
          <FaRegSun className={iconStyles} />
        )}
      </button>
    </div>
  );
}
