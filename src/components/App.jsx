import { debounce } from 'lodash';
import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import css from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (inputData) => {
    const { name, number } = inputData;
    if (!this.isContactPresent(name, number)) {
      const id = nanoid();
      const newContact = { id, ...inputData };
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact].sort(),
      }));
    } else {
      alert(`${name} is already in the contacts`);
    }
  };

  isContactPresent = (name, number) => {
    return this.state.contacts.some(
      (contact) =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  filterContacts = (contacts, filter) => {
    if (filter === '') {
      return contacts;
    }

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  onChangeFilterInput = debounce((event) => {
    this.setState({ filter: event.target.value.trim().toLowerCase() });
  }, 300);

  render() {
    const { contacts, filter } = this.state;
    const renderingContacts = this.filterContacts(contacts, filter);
    const noContactsMessage = 'There are no contacts in the contact list';
    const noFilteredContactsMessage =
      'No contacts were found for your request';

    return (
      <div className={css.app}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <section className={css.contacts}>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.onChangeFilterInput} />
          {contacts.length === 0 ? (
            <p>{noContactsMessage}</p>
          ) : renderingContacts.length === 0 ? (
            <p>{noFilteredContactsMessage}</p>
          ) : null}
          <ContactList
            contacts={renderingContacts}
            filter={filter}
            onBtnClick={this.deleteContact}
          />
        </section>
      </div>
    );
  }
}

export default App;
