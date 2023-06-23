import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = { name: '', number: '' };

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const { name, number } = this.state;
    this.props.onSubmit({ name: name.trim(), number: number.trim() });
    this.setState({ name: '', number: '' });
    form.reset();
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.onFormSubmit} className={styles.form}>
        <label className={styles.form_label}>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.onInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={styles.form_label}>
          <span>Number</span>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.onInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
