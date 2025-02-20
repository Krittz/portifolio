import Hero from "./pages/hero";
import Navbar from "./ui/navbar";
import Projects from "./pages/projects";
import About from "./pages/about";

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
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
