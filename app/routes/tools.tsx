export default function Projects() {
  return (
    <div>
      <div className="flex flex-col items-center px-[8%] lg:px-[15%]">
        <div className="font-bold text-lg pb-4">Things I like to use</div>
        <div className="font-poppins">
          <div>
            I like to put some thought into the stuff I use every day, so here’s
            some of my favorite things I get to to work with.
          </div>
          <br />
          <div>
            <div className="font-bold">Physical</div>
            <ul>
              {items.physical.map((obj) => (
                <li key={obj.name} className="pl-6">
                  • <span className="font-bold">{obj.name}: </span>
                  <span>{obj.attr}</span>
                </li>
              ))}
            </ul>
          </div>
          <br />
          <div>
            <div className="font-bold">Everyday Carry</div>
            <ul>
              {items.edc.map((item) => (
                <li key={item} className="pl-6">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const items = {
  physical: [
    {
      name: "Hardware",
      attr: "16” M1 Macbook Pro, Logitech G305 Mouse, Dell G2724D (vertical of course)",
    },
    { name: "Editor", attr: "Zed, VSCode for SSH" },
    { name: "CLI", attr: "starship.rs, zoxide" },
    { name: "Languages", attr: "Go, Python, TypeScript, SQL" },
    { name: "Other", attr: "React, Postgres, Vite (a godsend)" },
  ],
  edc: [
    "Weightlifting straps + cuffs",
    "Lightweight folding hex key set",
    "Flashlight",
  ],
};
