import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/contactslist';
import Filter from './Filter/Filter';
import shortid from 'shortid';

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

  addContact = ({ name, number }) => {
    const newContact = { id: shortid.generate(), name, number };
    const savedName = this.state.contacts.map(contact => contact.name);

    if (!savedName.includes(name)) {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    } else alert(`${name} is already in contacts`);
  };

  handleChange = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getFilteredNames = () => {
    const { contacts, filter } = this.state;
    const normalizedInputName = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedInputName)
    );
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleChange} />
        <ContactsList contacts={this.getFilteredNames()} />
      </>
    );
  }
}

export default App;
