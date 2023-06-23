import PropTypes from 'prop-types';
import css from './Contact.module.css';

export default Contact;

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

function Contact({ name, number, onClick }) {
  return (
    <>
      <p className={css.name}>{name}:</p>
      <p className={css.number}>{number}</p>
      <button name="deleteBtn" className={css.delete_btn} onClick={onClick}>
        Delete
      </button>
    </>
  );
}
