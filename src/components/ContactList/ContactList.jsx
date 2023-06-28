import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';
import css from './ContactList.module.css';

function ContactList({ contacts, onBtnClick }) {
  return (
    <ul className={css.contact_list}>
      {contacts.map((contact) => (
        <li className={css.contact_item} key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            onClick={() => onBtnClick(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};

export default ContactList;
