import Info from "../../ui/info";
import SectionTitle from "../../ui/section-title";

export default function About() {
  return (
    <div className="about text-center my-12 px-4">
      <SectionTitle title="Um Pouco" span="Sobre Mim" />

      <div className="about-content grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-5xl mx-auto">
        <Info
          icon="assets/img/icon1.svg"
          title="Desenvolvedor Front-end"
          description="Desenvolvo interfaces web responsivas e interativas utilizando React.js, Tailwindcss, Bootstrap ou CSS puro."
        />
        <Info
          icon="assets/img/icon2.svg"
          title="Desenvolvedor Mobile"
          description="Aplicativos Mobile feitos com Java, ou Kotlin, aplicativos híbridos com React Native ou Flutter."
        />
        <Info
          icon="assets/img/icon3.svg"
          title="Desenvolvedor Desktop"
          description="Sistemas offline com bancos de dados relacionais, controle de estoque e finanças."
        />
        <Info
          icon="assets/img/icon4.svg"
          title="Desenvolvedor Backend"
          description="API's, sistemas web diversos"
        />
      </div>
    </div>
  );
}
