import { Link } from 'react-router-dom';
import '../scss/components/Landing.scss';
import LinkButton from './LinkButton';
import LogoCreactivas from '../images/logo-creactivas.png';

function Landing() {
  return (
    <div className='landing'>
      <div className='landing__buttons'>
        <Link to={'/addnewproject'} style={{ textDecoration: 'none' }}>
          <LinkButton textContent='Nuevo proyecto' />
        </Link>
        <Link to={'/projectlist'} style={{ textDecoration: 'none' }}>
          <LinkButton className='buttonProjects' textContent='Ver proyectos' />
        </Link>
      </div>
      <img
        className='logoCreactivas'
        src={LogoCreactivas}
        alt='logo Creactivas'
      />
    </div>
  );
}

export default Landing;
