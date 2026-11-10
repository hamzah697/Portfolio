import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Introduction from "./Components/Introduction";
import Skills from "./Components/Skills";
import WhatIDo from "./Components/Whatido";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
     <Introduction />
    <WhatIDo/>
     <Projects />
     <Skills />
    <Footer />
     
    </main>
  );
}