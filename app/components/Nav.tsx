import { Link } from "@remix-run/react";
import { useLocation } from "@remix-run/react";

export default function Nav() {
  const links = [
    {
      to: "/",
      name: "About",
    },
    {
      to: "/projects",
      name: "Projects",
    },
    {
      to: "/tools",
      name: "Tools",
    },
  ];

  const location = useLocation();
  const offPageClass =
    "text-xl hover:underline transform transition-transform hover:scale-110";
  const onPageClass = offPageClass.concat(" font-bold");

  return (
    <div className="flex gap-8">
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.to}
          className={link.to === location.pathname ? onPageClass : offPageClass}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
