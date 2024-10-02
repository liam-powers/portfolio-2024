import { Theme, useTheme } from "remix-themes";
import linkedin from "../images/linkedin.svg";
import githubBlack from "../images/github-black.svg";
import githubWhite from "../images/github-white.svg";
import arrowLeftBlack from "../images/arrow-left-black.svg";
import arrowLeftWhite from "../images/arrow-left-white.svg";
import { useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  const [theme] = useTheme();

  const links = [
    { src: linkedin, href: "https://www.linkedin.com/in/liampowers-/" },
    {
      src: theme === Theme.DARK ? githubWhite : githubBlack,
      href: "https://github.com/liam-powers",
    },
  ];

  const hoverStyles = "transform transition-transform hover:scale-110 w-12";

  const showArrowLeft = location.pathname !== "/";

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={hoverStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={link.src} alt="link" />
          </a>
        ))}
      </div>

      {showArrowLeft ? (
        <a href="/" className={hoverStyles}>
          <img
            src={theme === Theme.DARK ? arrowLeftWhite : arrowLeftBlack}
            alt="back"
          />
        </a>
      ) : null}
    </div>
  );
}
