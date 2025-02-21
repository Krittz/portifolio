import Card from "../../ui/card";
import SectionTitle from "../../ui/section-title";

export default function Projects() {
  const projects = [
    {
      title: "Acordo Seguros - Corretora de Seguros",
      description:
        "Site institucional para a corretora de seguros Acordo Seguros. O site foi desenvolvido com o intuito de apresentar a empresa e seus serviços.",
      images: ["assets/img/projects/acordo-1.png"],
      tags: [
        "https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg",
        "https://github.com/devicons/devicon/raw/master/icons/tailwindcss/tailwindcss-original.svg",
        "https://github.com/devicons/devicon/raw/master/icons/figma/figma-original.svg",
      ],
      link: "#",
    },
    {
      title: "Bão ou Não - Insituto Federal do Triângulo Mineiro",
      description:
        "O sistema permite que a comunidade acadêmica do IFTM sugira e vote em propostas para a reitoria, além de acompanhar sua implementação.",
      images: ["assets/img/projects/baoounao-1.png"],

      tags: [
        "https://github.com/devicons/devicon/raw/master/icons/spring/spring-original.svg",
        "https://github.com/devicons/devicon/raw/master/icons/javascript/javascript-original.svg",
        "https://github.com/devicons/devicon/raw/master/icons/bootstrap/bootstrap-original.svg",
        "https://github.com/devicons/devicon/raw/master/icons/docker/docker-original.svg",
        "https://github.com/devicons/devicon/raw/master/icons/jenkins/jenkins-original.svg",
      ],
      link: "https://baoounao.iftmparacatu.app.br",
    },
  ];

  return (
    <div className="projects text-center my-12 px-4">
      <SectionTitle title="Uma Pequena Amostra de" span="Projetos Recentes" />

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
