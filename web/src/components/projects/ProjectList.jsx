import LinkButton from '../LinkButton';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import PropTypes from 'prop-types';

function ProjectList({ projectlistData }) {
  return (
    <div>
      <main className='containerListDetail'>
        <Link to={'/addnewproject'} style={{ textDecoration: 'none' }}>
          <LinkButton textContent='Nuevo proyecto' />
        </Link>

        <ul className='projectsList'>
          {projectlistData.map((project) => {
            return <ProjectCard project={project} key={project.id_project} />;
          })}
        </ul>
      </main>
    </div>
  );
}
ProjectList.propTypes = {
  infoProject: PropTypes.object,
};

export default ProjectList;
