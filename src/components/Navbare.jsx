import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import images from "../constants/images";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbare() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isWp = useLocation().pathname.startsWith("/work/");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
    <header
      className={`z-50 fixed top-0 right-0 left-0 py-1 transition-all ${
        scrolled ? "bg-white weff shadow-lg" : "backdrop-blur-sm"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to={"/"}>
          <img
            src={images.logo}
            alt=""
            className={`w-14 ${!scrolled && isWp && "invert"}`}
          />
        </Link>
        <MdOutlineMenu
          className={`md:hidden text-tcolor p-3 cursor-pointer ${
            !scrolled && isWp && "invert"
          }`}
          size={55}
          onClick={() => setIsOpen(true)}
        />
        <nav
          className={`flex items-center gap-8 md:relative fixed md:flex-row flex-col md:h-auto h-screen md:justify-normal
       justify-center top-0 right-0 md:w-auto w-2/3 md:backdrop-blur-none z-50 md:bg-transparent bg-main transition-all md:translate-x-0 ${
         isOpen ? "translate-x-0" : "translate-x-full"
       }`}
        >
          <IoCloseSharp
            className="md:hidden text-tcolor fixed top-8 left-8 p-3 cursor-pointer"
            size={55}
            onClick={() => setIsOpen(false)}
          />
          <div className="flex items-center md:flex-row flex-col">
            <Link
              to="/"
              className={`py-4 px-3 om transition-all md:hover:text-main hover:text-white ${
                !scrolled && isWp && "md:text-white"
              }`}
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>
            <a
              href="/#about"
              className={`py-4 px-3 om transition-all md:hover:text-main hover:text-white ${
                !scrolled && isWp && "md:text-white"
              }`}
              onClick={() => {
                setIsOpen(false), handleNavigation("#about");
              }}
            >
              ABOUT US
            </a>
            <a
              href="/#services"
              className={`py-4 px-3 om transition-all md:hover:text-main hover:text-white ${
                !scrolled && isWp && "md:text-white"
              }`}
              onClick={() => {
                setIsOpen(false), handleNavigation("#services");
              }}
            >
              SERVICES
            </a>
            <a
              href="/#portfolio"
              className={`py-4 px-3 om transition-all md:hover:text-main hover:text-white ${
                !scrolled && isWp && "md:text-white"
              }`}
              onClick={() => {
                setIsOpen(false), handleNavigation("#portfolio");
              }}
            >
              PORTFOLIO
            </a>
          </div>
          <a
            href="/#contact"
            className={`px-3 py-1 border-2 md:border-main border-white rounded-full om ${
              !scrolled && isWp && "md:text-white"
            }`}
            onClick={() => {
              setIsOpen(false), handleNavigation("#contact");
            }}
          >
            CONTACT US
          </a>
        </nav>
      </div>
    </header>
  );
}
