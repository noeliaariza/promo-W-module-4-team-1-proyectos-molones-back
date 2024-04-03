import '../scss/components/InputButton.scss';
import PropTypes from 'prop-types';

const InputButton = (props) => {
  return (
    <>
      <label htmlFor={props.id} className='button'>
        {props.textContent}
      </label>
      <input
        id={props.id}
        name={props.name}
        className='addForm__hidden'
        type='file'
      />
    </>
  );
};
InputButton.propTypes = {
  textContent: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default InputButton;
