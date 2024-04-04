import "../../scss/components/Preview.scss";
import PropTypes from "prop-types";

function ProjectCard({infoProject}) {
  return (
    <article className="card">
    <h2 className="card__projectTitle">
      <span className="card__projectTitle--text">
        Personal project card
      </span>
    </h2>

    <div className="card__author">
      <div
        className="card__authorPhoto"
        style={{
          backgroundImage: `url(${infoProject.photo})`,
        }}
      ></div>
      <p className="card__job">{infoProject.job}</p>
      <h3 className="card__name centerName">{infoProject.autor}</h3>
    </div>

    <div className="card__project">
      <h3 className="card__name">{infoProject.name}</h3>
      <p className="card__slogan">{infoProject.slogan}</p>
      <h3 className="card__descriptionTitle">
        {infoProject.descriptionTitle}
      </h3>
      <p className="card__description">{infoProject.desc}</p>

      <div className="card__technicalInfo">
        <p className="card__technologies">{infoProject.technologies}</p>

        <a
          className="icon icon__www"
          href={infoProject.demo}
          title="Haz click para ver el proyecto online"
        >
          Web link
        </a>
        <a
          className="icon icon__github"
          href={infoProject.repo}
          title="Haz click para ver el código del proyecto"
        >
          GitHub link
        </a>
      </div>
    </div>
  </article>
  )
}
ProjectCard.propTypes = {
    infoProject: PropTypes.object,
  };
export default ProjectCard