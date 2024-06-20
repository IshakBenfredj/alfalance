import { useEffect, useState } from "react";
import images from "../constants/images";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function Services() {
  const [index, setIndex] = useState(0);
  // Uncomment this useEffect to enable auto sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index === 2 ? 0 : index + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const next = () => {
    setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  const prev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  return (
    <div id="services" className="md:py-16 py-10 bg-tcolor mb-20">
      <h1 className="text-white relative z-40 md:text-5xl text-3xl font-bold om mb-8 text-center">
        OUR SERVICES
      </h1>
      <div className="container flex items-center justify-between md:px-20 px-4">
        <span
          className="px-1 py-3 bg-white text-2xl cursor-pointer"
          onClick={prev}
        >
          <IoIosArrowBack />
        </span>
        <div className="w-1/2 overflow-hidden relative">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            <div className="w-full flex-shrink-0">
              <img
                src={images.s1}
                alt="Logo design"
                className="md:w-3/5 mx-auto"
              />
              <h3 className="text-white text-center mt-4 md:text-4xl text-2xl om">
                Logo design
              </h3>
            </div>
            <div className="w-full flex-shrink-0">
              <img
                src={images.s2}
                alt="Branding design"
                className="md:w-3/5 mx-auto"
              />
              <h3 className="text-white text-center mt-4 md:text-4xl text-2xl om">
                Branding design
              </h3>
            </div>
            <div className="w-full flex-shrink-0">
              <img
                src={images.s3}
                alt="Social media design"
                className="md:w-3/5 mx-auto"
              />
              <h3 className="text-white text-center mt-4 md:text-4xl text-2xl om">
                Social media design
              </h3>
            </div>
          </div>
        </div>
        <span
          className="px-1 py-3 bg-white text-2xl cursor-pointer"
          onClick={next}
        >
          <IoIosArrowForward />
        </span>
      </div>
    </div>
  );
}
