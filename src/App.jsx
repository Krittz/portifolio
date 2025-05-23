import Hero from "./pages/hero";
import Navbar from "./ui/navbar";
import Projects from "./pages/projects";
import About from "./pages/about";
import Footer from "./ui/footer";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="App relative">
      <header className="relative w-full">
        <Navbar />
      </header>
      <main>
        <section id="inicio" className="md:h-screen">
          <Hero />
        </section>
        <section
          id="sobre"
          className="md:h-screen md:grid md:place-items-center"
        >
          <About />
        </section>
        <section
          id="projetos"
          className="md:h-screen md:grid md:place-items-center"
        >
          <Projects />
        </section>
        <section
          id="contato"
          className="md:h-screen md:grid md:place-items-center"
        >
          <Contact />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
