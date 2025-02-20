import "./style.css";

export default function Projects() {
  const projects = [
    {
      title: "Acordo Seguros - Corretora de Seguros",
      description:
        "Site institucional para a corretora de seguros Acordo Seguros. O site foi desenvolvido com o intuito de apresentar a empresa e seus serviços, além de permitir a solicitação de cotação de seguros.",
      images: ["assets/img/projects/acordo-1.png"],
      tags: [
        "https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg",
        "https://github.com/devicons/devicon/raw/master/icons/tailwindcss/tailwindcss-original.svg",
        "https://github.com/devicons/devicon/raw/master/icons/html5/html5-original.svg",
        "https://github.com/devicons/devicon/raw/master/icons/css3/css3-original.svg",
        "https://github.com/devicons/devicon/raw/master/icons/javascript/javascript-original.svg",
        "https://github.com/devicons/devicon/raw/master/icons/figma/figma-original.svg",
      ],
      link: "#",
    },
    {
      title: "Bão ou Não",
      description:
        "Sistema similar ao Brasil Participativo, feito sob medida para o Instituto Federal do Triângulo Mineiro. O sistema permite a comunidade acadêmica sugerir propostas para a reitoria, onde o a comunidade pode votar e escolher as propostas mais adequeadas para ser implementada pela instituição, além de permitir o acompanhamento da implementação do proposta escolhida.",
      images: ["assets/img/projects/baoounao-1.png"],
      tags: [
        "https://github.com/devicons/devicon/raw/master/icons/java/java-original.svg",
        "https://github.com/devicons/devicon/raw/master/icons/spring/spring-original.svg",
        "https://github.com/devicons/devicon/raw/master/icons/html5/html5-original.svg",
        "https://github.com/devicons/devicon/raw/master/icons/css3/css3-original.svg",
        "https://github.com/devicons/devicon/raw/master/icons/bootstrap/bootstrap-original.svg",
        "https://github.com/devicons/devicon/raw/master/icons/javascript/javascript-original.svg",
        "https://github.com/devicons/devicon/raw/master/icons/mariadb/mariadb-original.svg",
        "https://github.com/devicons/devicon/raw/master/icons/docker/docker-original.svg",
        "https://github.com/devicons/devicon/raw/master/icons/jenkins/jenkins-original.svg",
        "https://github.com/devicons/devicon/raw/master/icons/nginx/nginx-original.svg",
      ],
      link: "https://baoounao.iftmparacatu.app.br",
    },
  ];

  return (
    <div className="projects text-center my-12 px-4">
      <h1 className="text-3xl font-bold text-white">
        Uma Pequena Seleção de{" "}
        <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400 inline-block text-transparent bg-clip-text">
          Projetos Recentes
        </span>
      </h1>

      <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-6xl mx-auto">
        {projects.map((item, i) => (
          <div
            key={i}
            className="bg-gradient-to-tl from-[#1a1a1d] via-[#1a1a1d] to-purple-900/20 border border-gray-700 rounded-2xl p-6 shadow-lg transition hover:scale-[1.02] hover:bg-gradient-to-br hover:from-[#1a1a1d] hover:via-[#1a1a1d] hover:to-purple-900/40"
          >
            {item.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Project"
                className="w-full h-75 object-cover rounded-lg"
              />
            ))}

            <div className="mt-4">
              <h2 className="text-xl font-bold text-white">{item.title}</h2>
              <p className="text-gray-400 mt-2 text-center">
                {item.description}
              </p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-2 flex-wrap">
                  {item.tags.map((tag, index) => (
                    <img
                      key={index}
                      src={tag}
                      alt="Tech Icon"
                      className="w-9 h-9 border border-indigo-900 rounded-full p-2"
                    />
                  ))}
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 text-sm font-semibold flex items-center justify-center border-purple-400 rounded-lg py-2 mt-4"
                >
                  Veja →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
