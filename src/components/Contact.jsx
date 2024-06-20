import { useRef } from "react";
import images from "../constants/images";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("gmail", "template_bp7gbmi", form.current, {
        publicKey: "NeuP0dCMvJEVkWsZo",
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
    alert(
      "Your message has been sent successfully, we will reply to your message soon"
    );
  };
  return (
    <div
      className="grid md:grid-cols-2 items-center md:gap-0 gap-8 md:h-[90vh] md:py-0 pt-20 overflow-hidden"
      id="contact"
    >
      <div className="flex items-center justify-center">
        <div className="md:w-3/5 w-4/5">
          <h1 className="text-tcolor relative z-40 md:text-5xl text-3xl font-bold om md:mb-20 mb-10">
            CONTACT US
          </h1>
          <form
            className="flex flex-col space-y-8 w-full"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              name="name"
              required
              placeholder="N A M E"
              className="bg-transparent outline-none border-b-2 border-tcolor p-2 placeholder:text-tcolor om placeholder:font-bold placeholder:text-sm text-xl"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="E M A I L"
              className="bg-transparent outline-none border-b-2 border-tcolor p-2 placeholder:text-tcolor om placeholder:font-bold placeholder:text-sm text-xl"
            />
            <input
              type="text"
              name="message"
              required
              placeholder="M E S S A G E"
              className="bg-transparent outline-none border-b-2 border-tcolor p-2 placeholder:text-tcolor om placeholder:font-bold placeholder:text-sm text-xl"
            />
            <input
              type="submit"
              value="S E N D"
              className="bg-tcolor p-3 text-xl om text-white"
            />
          </form>
        </div>
      </div>
      <div className="relative h-full flex items-center">
        <img
          src={images.mainBg}
          alt=""
          className="h-full absolute right-0 top-0 bottom-0 md:block hidden"
        />
        <div className="bg-tcolor eff md:h-2/3 h-fit md:w-3/5 w-full ml-auto relative p-3 flex flex-col justify-center">
          <div className="flex items-center text-white text-xl om gap-3">
            <img src={images.all} alt="" className="w-16 invert" />
            <p className="text-white">@alfalance</p>
          </div>
          <div className="flex items-center text-white text-xl om gap-3">
            <img src={images.facebook} alt="" className="w-10 mr-5 invert" />
            {/* <FaFacebookF size={30} className="tw mr-4 ml-3" /> */}
            <a target="_blank" href="https://www.facebook.com/alfaLance.dz">
              Alfa Lance
            </a>
          </div>
          <div className="flex items-center text-white text-xl om gap-3">
            <img src={images.mail} alt="" className="w-16 invert" />
            <a target="_blank" href="mailto:alfalance.dz@gmail.com">
              alfalance.dz@gmail.com
            </a>
          </div>
          <div className="flex items-center text-white text-xl om gap-3">
            <img src={images.be} alt="" className="w-16 invert" />
            <a
              target="_blank"
              href="https://www.behance.net/alfalance"
              className="text-white"
            >
              alfalance
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
