/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <div
      id="about"
      className="container md:w-9/12 mx-auto bg-tcolor z-40 relative md:py-16 md:px-24 py-10 text-center mb-12"
    >
      <h1 className="text-white relative z-40 md:text-5xl text-3xl font-bold om mb-8">ABOUT US</h1>
      <div className="ol relative z-40 space-y-2">
        <p className="text-white md:text-xl text-lg ol">
          Welcome to Alfalance, where creativity meets precision in graphic
          design.
        </p>
        <p className="text-white md:text-xl text-lg ol">
          At Alfalance, we believe in the power of visual storytelling and the
          impact it can
        </p>
        <p className="text-white md:text-xl text-lg ol">
          {" "}
          have on your brand's identity.
        </p>
        <p className="text-white md:text-xl text-lg ol">
          From logo design and branding to digital illustrations and marketing
          materials,
        </p>
        <p className="text-white md:text-xl text-lg ol">
          {" "}
          I bring a balance of artistry and strategy to every project.
        </p>
        <p className="text-white md:text-xl text-lg ol">
          My mission is to elevate your brand with designs that are not only
          visually
        </p>
        <p className="text-white md:text-xl text-lg ol">
          {" "}
          stunning but also effective in communicating your message.
        </p>
      </div>
      <p className="text-white relative z-40 md:text-xl text-lg ol mt-10">
        Partner with Alfalance, and let us transform your vision into a visual{" "}
        <br className="md:block hidden" />
        masterpiece.
      </p>
    </div>
  );
}
