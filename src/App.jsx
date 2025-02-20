import Hero from "./ui/hero";
import Navbar from "./ui/navbar";
import Projects from "./ui/projects";

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
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
