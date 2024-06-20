/* eslint-disable react/no-unescaped-entities */
import images from "../constants/images";

export default function Landing() {
  return (
    <div className="relative md:h-screen md:p-0 py-40 px-2">
      <img
        src={images.landing}
        className="md:block absolute hidden top-16 right-0 md:w-3/5"
        alt="Landing"
      />
      <div className="container h-full flex items-center">
        <div className="md:w-2/3 space-y-3">
          <h4 className="om md:text-4xl text-2xl font-semibold">Welcom to</h4>
          <h1 className="md:text-9xl text-5xl font-bold om">
            <span className="text-main">Alfa</span>lance.
          </h1>
          <p className="text-xl md:w-4/5">
            I'm Alfa, a specialized graphic designer in logo design and visual
            identity. I offer services in various types of design,includign logo
            design, social media graphics, posters, and more
          </p>
          <a
            href="#about"
            className="px-3 block w-fit py-1 border-2 border-main rounded-full om"
          >
            More
          </a>
        </div>
      </div>
    </div>
  );
}
