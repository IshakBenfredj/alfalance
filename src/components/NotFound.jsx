import images from "../constants/images";

export default function NotFound() {
  return <div className="h-screen w-full">
    <img src={images.notfound} alt="" className="w-full h-full object-contain" />
  </div>;
}
