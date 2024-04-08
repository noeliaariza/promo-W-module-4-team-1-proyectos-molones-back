import '../scss/components/Button.scss';
import PropTypes from 'prop-types';

const Button = (props) => {
  return <button className='button--large'>{props.textContent}</button>;
};
Button.propTypes = {
  textContent: PropTypes.string.isRequired,
};

export default Button;
