import LinkButton from '../LinkButton';
import { Link } from 'react-router-dom';

function ProjectList() {
  return (
    <div>
      <main>
        {/* <section className='hero'>
          <h2 className='title'>Proyectos molones</h2>
          <p className='hero__text'>
            Escaparate en línea para recoger ideas a través de la tecnología
          </p> */}

        {/* </section> */}
        <Link to={'/addnewproject'}>
          <LinkButton textContent='Nuevo proyecto' />
        </Link>
      </main>
    </div>
  );
}

export default ProjectList;
