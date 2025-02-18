import Hero from "./ui/hero";
import Navbar from "./ui/navbar";

function App() {
  return (
    <>
      <header id="inicio" className="relative w-full">
        <Navbar />
      </header>
      <main>
        <Hero />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
