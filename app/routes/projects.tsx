import HomeArrow from "../components/HomeArrow";

export default function Projects() {
  return (
    <div>
      <HomeArrow />
      <div className="flex flex-col items-center px-[8%] lg:px-[15%]">
        <div className="font-bold text-lg">Projects</div>
        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <div key={project.title}>
              <div className="font-bold pb-4">{project.title}</div>
              <div className="font-poppins">
                <div>{project.blurb}</div>
                <ul className="pl-6">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    title: "Bass Harbor",
    blurb:
      "Full stack web app for upright bassists to find their ideal instrument",
    bullets: [
      "Pulls from new and used listing sites via Google Cloud cronjobs in TypeScript with Puppeteer",
      "Provides filters to query listings from Firebase and renders them with Next.js and React",
      "Learned web scraping, TypeScript, Firebase, and better understanding of React",
    ],
    code: "",
  },
  {
    title: "PastePouch",
    blurb:
      "Full stack web app with Rust CLI for copiers to paste safely, quickly, and enjoyably",
    bullets: [
      "Provides true one-click experience for clipboard sharing, featuring auto-blur for sensitive information (API keys, credit cards), code highlighting, and fun global share statistics",
      "Svelte front end connects to PostgreSQL hosted on CloudSQL for database functionality",
      "Features high-performance Rust CLI tool for developers to paste multiple files at once",
    ],
  },
];
