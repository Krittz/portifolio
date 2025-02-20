import { useState, useEffect } from "react";

export default function Navbar() {
  const navigation = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" },
  ];

  const [activeSection, setActiveSection] = useState("#início");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      navigation.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const offsetTop = section.offsetTop - 60;
          const offsetBottom = offsetTop + section.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(item.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-[50px] left-0 right-0 flex justify-center z-50">
      <div className=" backdrop-blur-sm bg-white/2 rounded-2xl px-6 py-4 md:px-12 flex items-center justify-center md:w-[451px] w-full max-w-[calc(100%-24px)] outline outline-slate-900">
        <ul className="flex items-center gap-6 text-gray-400 ">
          {navigation.map((item, index) => (
            <li key={index} className="nav-item">
              <a
                className={`hover:text-gray-200 transition ${
                  activeSection === item.href ? "text-white font-bold" : ""
                }`}
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
