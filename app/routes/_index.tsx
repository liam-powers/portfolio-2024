import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Liam Powers" },
    { name: "description", content: "Liam Powers Portfolio" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-4">
        <div className="font-bold py-8 pt-20">Liam Powers Portfolio</div>
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            className="hover:underline transform transition-transform hover:scale-110"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

const links = [
  {
    to: "/about",
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
