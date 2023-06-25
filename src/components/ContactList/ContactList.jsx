import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';
import css from './ContactList.module.css';

function ContactList({ contacts, filter, onBtnClick }) {
  const renderingContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contact_list}>
      {renderingContacts.map((contact) => (
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
  filter: PropTypes.string.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};

export default ContactList;
