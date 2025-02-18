import { useState, useEffect } from "react";

export default function Hero() {
  const words = [
    "Conecta",
    "Impacta",
    "Inova",
    "Transforma",
    "Revoluciona",
    "Impulsiona",
    "Eleva",
    "Simplifica",
  ];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const speed = deleting ? 50 : 100;

  useEffect(() => {
    const word = words[index];
    let timeout;

    if (deleting) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
      }, speed);
      if (text === "") {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      timeout = setTimeout(() => {
        setText(word.slice(0, text.length + 1));
      }, speed);
      if (text === word) {
        setTimeout(() => setDeleting(true), 1000);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index]);
  return (
    <div className="hero flex flex-col text-center">
      <p className="hero-intro text-white/40 uppercase mt-[186px] text-sm">
        Desenvolvimento de confiança, criando soluções sob medida.
      </p>
      <h1 className="text-white/90 font-bold text-5xl w-100 md:w-[938px] self-center mt-6">
        Transformando sua visão em tecnologia que <br />
        <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400 inline-block text-transparent bg-clip-text">
          {text}
        </span>
      </h1>
      <p className="text-white/60 my-8 text-lg">
        Cada projeto é único, assim como a solução que você precisa. Vamos criar
        algo incrível juntos!
      </p>
      <button className="flex flex-col items-center justify-center transition w-50 mx-auto text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700  hover:bg-gradient-to-br focus:outline-none font-medium rounded-lg py-2.5 text-center my-2 ">
        Veja meu trabalho
        <i className="bx bx-chevrons-down text-xl"></i>
      </button>
    </div>
  );
}
