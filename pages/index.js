import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Mail from "../Components/Mail";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Services from "../Components/Services";
import Clients from "./../Components/Clients";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Clients />
      <Mail />
      <Footer />
    </>
  );
}
