import linkedin from "../images/linkedin.png";
import github from "../images/github.png";

const links = [
  { src: linkedin, href: "https://www.linkedin.com/in/liampowers-/" },
  { src: github, href: "https://github.com/liam-powers" },
];

export default function Nav() {
  return (
    <div className="flex gap-4">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="transform transition-transform hover:scale-110 w-12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={link.src} alt="link" />
        </a>
      ))}
    </div>
  );
}
