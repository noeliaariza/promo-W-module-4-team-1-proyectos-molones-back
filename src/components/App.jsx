import { useState } from "react";
import Header from "./Header";
import Preview from "./Preview";
import LinkButton from "./LinkButton";
import Form from "./Form";
import Footer from "./Footer";
import localStorage from "../services/localStorage";
import "../scss/App.scss";
import "../scss/components/Main.scss";
import { Routes, Route } from "react-router-dom";
import ProjectList from "./projects/ProjectList";

function App() {
  const [infoProject, setInfoProject] = useState(
    localStorage.get("infoProject") || {
      name: "cREACTivas",
      slogan: "Hasta el push y más allá",
      repo: "",
      demo: "",
      technologies: "React JS - HTML - CSS",
      desc: `Nunca nos damos por vencidas, encontraremos la pieza que falta en el código hasta lograr aquello que se busca. Ningún bug nos doblegará, ningún conflicto podrá con nosotras.`,
      autor: "Margarita Hamilton",
      job: "Full stack Developer",
      image:
        "https://afiescuela.storage.googleapis.com/cms_multimedia/cms_medias/files/000/001/538/original/margaret.png?1607668400",
      photo:
        "https://cdn.evalart.com/wp-content/uploads/2019/06/MujeresenTIPioneras.png",
    }
  );

  const [url, setUrl] = useState("");

  const handleProjectInfo = (value, id) => {
    setInfoProject({ ...infoProject, [id]: value });
    console.log(infoProject);
  };

  const onClickSave = () => {
    fetch("https://dev.adalab.es/api/projectCard", {
      method: "POST",
      body: JSON.stringify(infoProject),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((result) => {
        setUrl(result.cardURL);
        console.log(result);
        if (result.success) {
          localStorage.set("infoProject", infoProject);
        }
      });
  };

  return (
    <div className="container">
      <Header />
      <main className="main">
        <section className="hero">
          <h2 className="title">Proyectos molones</h2>
          <p className="hero__text">
            Escaparate en línea para recoger ideas a través de la tecnología
          </p>

          {/* <LinkButton to="/projectlist" textContent="Ver proyectos" /> */}
        </section>

        <Routes>
          <Route path="/" element={<ProjectList />} />
          <Route
            path="/addnewproject"
            element={
              <>
                <Preview infoProject={infoProject} cardUrl={url} />
                <Form
                  onClickSave={onClickSave}
                  onChangeValue={handleProjectInfo}
                  cardUrl={url}
                  infoProject={infoProject}
                />
              </>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
