import LinkButton from "./LinkButton";
import "../scss/components/Main.scss";

const Main = ({

}) => {
  return (
    <main className="main">
      <section className="hero">
        <h2 className="title">Proyectos molones</h2>
        <p className="hero__text">
          Escaparate en línea para recoger ideas a través de la tecnología
        </p>
        <LinkButton textContent="Ver proyectos" />
      </section>

     
    </main>
  );
};

export default Main;
