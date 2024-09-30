import arrowleft from "../images/arrow-left.svg";

export default function HomeArrow() {
  return (
    <a href="/">
      <img
        src={arrowleft}
        alt="back"
        className="transform transition-transform hover:scale-110 w-12"
      />
    </a>
  );
}
