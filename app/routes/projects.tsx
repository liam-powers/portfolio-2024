export default function Projects() {
  const hyperlinkStyles =
    "text-[#007EBB] underline transform transition-transform hover:scale-110 w-12";

  return (
    <div>
      <div className="flex flex-col items-center px-[8%] lg:px-[15%]">
        <div className="font-bold text-lg">Projects</div>
        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <div key={project.title}>
              <div className="font-bold pb-4">
                {project.title}
                &nbsp;|&nbsp;
                <span>
                  <a
                    href={project.code}
                    className={hyperlinkStyles}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </span>
                &nbsp;|&nbsp;
                <span>
                  <a
                    href={project.link}
                    className={hyperlinkStyles}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Site
                  </a>
                </span>
              </div>
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
    code: "https://gist.github.com/liam-powers/013fb675fa823d98b470bffc975b664a",
    link: "https://bass-harbor-liam-powers-projects.vercel.app",
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
    code: "https://gist.github.com/liam-powers/30e055d4f2f4b86331518900ea709118",
    link: "https://paste-pouch-front-end.vercel.app/",
  },
];
