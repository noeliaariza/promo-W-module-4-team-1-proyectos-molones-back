import "../scss/components/Header.scss";
import funnyProject from '../images/laptop-code-solid.svg';
import adalabLogo from '../images/adalab.png';

const Header = () => {
    return(
        <header className='header'>
          <a
            className='header__brand'
            href='./'
            title='Haz click para volver a la página inicial'
          >
            <img
              className='header__companyLogo'
              src= {funnyProject}
              alt='Logo proyectos molones'
            />
            <h1 className='header__title'>Proyectos molones</h1>
          </a>
          <img
            className='logoSponsor'
            src= {adalabLogo}
            alt='Logo Adalab'
          />
        </header>

    );

}

export default Header;