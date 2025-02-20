import Hero from "./pages/hero";
import Navbar from "./ui/navbar";
import Projects from "./pages/projects";
import About from "./pages/about";

function App() {
  return (
    <div className="App">
      <header className="relative w-full">
        <Navbar />
      </header>
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <section id="projetos">
          <Projects />
        </section>
        <section id="sobre">
          <About />
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
