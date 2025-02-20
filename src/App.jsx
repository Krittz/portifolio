import Hero from "./ui/hero";
import Navbar from "./ui/navbar";

function App() {
  return (
    <div className="App">
      <header id="inicio" className="relative w-full">
        <Navbar />
      </header>
      <main>
        <Hero />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
