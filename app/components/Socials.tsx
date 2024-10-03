import { useState, useEffect } from "react";
import { Theme, useTheme } from "remix-themes";
import linkedin from "../images/linkedin.svg";
import githubBlack from "../images/github-black.svg";
import githubWhite from "../images/github-white.svg";

export default function Socials() {
  const [theme] = useTheme();
  const [githubIcon, setGithubIcon] = useState(githubWhite);

  const links = [
    { src: linkedin, href: "https://www.linkedin.com/in/liampowers-/" },
    {
      src: githubIcon,
      href: "https://github.com/liam-powers",
    },
  ];

  useEffect(() => {
    if (theme === Theme.DARK) {
      setGithubIcon(githubWhite);
    } else {
      setGithubIcon(githubBlack);
    }
  }, [theme]);

  const hoverStyles =
    "transform transition-transform hover:scale-110 w-8 lg:w-12";

  return (
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
  );
}
