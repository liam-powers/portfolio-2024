import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col items-center">
      <div className="font-bold py-20">Welcome!</div>
      <div className="flex flex-col gap-4">
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
