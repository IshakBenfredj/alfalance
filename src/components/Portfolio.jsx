import { Link } from "react-router-dom";
import work from "../constants/work";

export default function Portfolio() {
  return (
    <div id="portfolio" className="md:py-16 py-10 bg-tcolor eff">
      <h1 className="text-white relative z-40 md:text-5xl text-3xl font-bold om mb-8 text-center">
        OUR WORK
      </h1>
      <div className="container grid md:grid-cols-4 grid-cols-2 justify-center items-center gap-8">
        {work.map((w, i) => (
          <Link to={`/work/${i}`} key={i} className="bg-white transition-all hover:border-4 border-main md:p-8 p-4 rounded-3xl">
            <img src={w.logo} alt={i} className="w-full" />
          </Link>
        ))}
      </div>
    </div>
  );
}
