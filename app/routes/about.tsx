import headshot from "../images/headshot.jpeg";

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center px-[8%] lg:px-[15%] pb-4">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex flex-col gap-8 font-poppins order-2 md:order-1">
            <div className="font-bold pb-4 text-center text-lg">About</div>

            <div>
              Hi! My name is Liam. I’m a Northwestern University student
              majoring in Computer Science aspiring to be the best software
              engineer I can be. I am also pursuing a minor in Data Science.
            </div>

            <div>
              Some of my favorite courses have been: Operating Systems Data
              Structures and Algorithms Distributed Systems Machine Learning
              Game Design and Development Python for Data Science
            </div>

            <div>
              This fall I’m excited to be taking Scalable Software Architectures
              alongside Human Computer Interaction next quarter as a supplement
              to my endeavors as a full stack developer.
            </div>

            <div>
              I’m also involved in my university’s jazz program. I’ve played
              upright and electric bass for over a decade. I currently play in a
              several ensembles and study with Carlos Henriquez, bassist of the
              Jazz at Lincoln Center Orchestra led by Wynton Marsalis.
            </div>

            <div>
              This past summer I interned at Locago, a startup founded by a
              Kellogg MBA student which provides a web and mobile B2B
              marketplace for consumers to discover and purchase local retail
              goods. In my first couple weeks I built the foundation of our back
              end with TypeScript to fetch sync store inventories with our
              database. The rest of my time was spent on the front end, using
              React to significantly modify Sharetribe’s web template to match
              the feel and functionality of our product.
            </div>

            <div>
              During my free time, I enjoy learning new things by building
              personal projects. I also enjoy lifting, meditation, reading
              non-fiction, and video games. I have been ranked top 50 in the
              world for the game Rivals of Aether the past two years by
              traveling to tournaments around the country and performing well
              when I get the chance, and eagerly await the release of Rivals 2.
            </div>
          </div>
          <img
            src={headshot}
            alt="Me"
            className="w-60 h-auto object-contain mx-auto justify-center order-1 md:order-2"
          />
        </div>
      </div>
    </div>
  );
}
