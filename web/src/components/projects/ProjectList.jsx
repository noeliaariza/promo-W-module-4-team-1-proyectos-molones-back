import LinkButton from '../LinkButton';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import PropTypes from "prop-types";

function ProjectList({infoProject}) {
  return (
    <div>
      <main>
       
        <Link to={'/addnewproject'}>
          <LinkButton textContent='Nuevo proyecto' />
        </Link>
        <ProjectCard infoProject={infoProject}/>
        <ProjectCard infoProject={infoProject}/>
        <ProjectCard infoProject={infoProject}/>
        <ProjectCard infoProject={infoProject}/>
      </main>
    </div>
  );
}
ProjectList.propTypes = {
  infoProject: PropTypes.object,
};

export default ProjectList;
