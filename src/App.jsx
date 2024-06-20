import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import Navbare from "./components/Navbare";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Work from "./components/Work";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Navbare />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:id" element={<Work />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

const Home = () => {
  return (
    <div className="min-h-screen">
      <Landing />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
};
