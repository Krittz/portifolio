import Info from "../../ui/info";
import SectionTitle from "../../ui/section-title";

export default function About() {
  return (
    <div className="about text-center my-12 px-4">
      <SectionTitle title="Um Pouco" span="Sobre Mim" />

      <div className="about-content grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-5xl mx-auto">
        <Info
          icon="assets/img/icon1.svg"
          title="Quem sou eu?"
          description="Sou um desenvolvedor full-stack focado em criar soluções eficientes e sob medida. Transformo ideias em sistemas robustos, intuitivos e escaláveis."
        />
        <Info
          icon="assets/img/icon2.svg"
          title="O que eu faço?"
          description="Desenvolvo aplicações web, APIs, sistemas empresariais, landing pages e integrações. Atuo no frontend, backend e também no desenvolvimento mobile e desktop."
        />
        <Info
          icon="assets/img/icon3.svg"
          title="Principais Tecnologias"
          description="PHP, Laravel, Java, Spring Boot, React, Next.js, MySQL, PostgreSQL, Docker, Linux, Git, Figma e mais."
        />
        <Info
          icon="assets/img/icon4.svg"
          title="Por que me contratar?"
          description="Entrego soluções personalizadas, seguras e escaláveis, sempre focado na melhor experiência para o usuário e nos objetivos do seu projeto."
        />
      </div>
    </div>
  );
}
