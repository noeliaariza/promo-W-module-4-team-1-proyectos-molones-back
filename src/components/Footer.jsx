import "../scss/components/Footer.scss";
import adalabLogo from '../images/adalab.png';

const Footer = () => {
    return(
        <footer className='footer'>
          <img
            className='logoSponsor'
            src= {adalabLogo}
            alt='Logo Adalab'
          />
        </footer>

    );

}

export default Footer;