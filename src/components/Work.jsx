import { useNavigate, useParams } from "react-router-dom";
import work from "../constants/work";
import { useEffect } from "react";
import images from "../constants/images";

export default function Work() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(work.length);
    if (parseInt(id) >= work.length || 0 > parseInt(id)) {
      return navigate("/404");
    }
  }, [id, navigate]);

  const handleNavigation = (hash) => {
    if (location.pathname === "/") {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { hash } });
    }
  };

  return (
    <div>
      <a className="fixed bottom-16 md:right-12 right-6 bg-main flex items-center rounded-full py-2 px-4 animate-bounce">
        <img src={images.mail} alt="" className="md:w-12 w-9" />
        <a
          href="/#contact"
          onClick={() => handleNavigation("#contact")}
          className="om font-bold md:text-2xl text-xl text-black"
        >
          Contact Us
        </a>
      </a>
      {work[id]?.brand.map((b, i) => (
        <img src={b} alt="" key={i} />
      ))}
    </div>
  );
}
