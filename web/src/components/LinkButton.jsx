import '../scss/components/LinkButton.scss';
import PropTypes from 'prop-types';

const LinkButton = (props) => {
  return (
    <a className='button--link' href='./'>
      {props.textContent}
    </a>
  );
};
LinkButton.propTypes = {
  textContent: PropTypes.string.isRequired,
};
export default LinkButton;
