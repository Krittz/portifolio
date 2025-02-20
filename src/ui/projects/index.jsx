import Card from "../card";
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
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            tags={project.tags}
            image={project.images}
          />
        ))}
      </div>
    </div>
  );
}
