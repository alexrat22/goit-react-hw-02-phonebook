import React, { Component } from 'react';
import {
  FormContainer,
  ContactsContainer,
  Title,
  TitleContacts,
} from './App.styled';
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

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <>
        <FormContainer>
          <Title>Phonebook</Title>
          <ContactForm onSubmit={this.addContact} />
        </FormContainer>
        <ContactsContainer>
          <TitleContacts>Contacts</TitleContacts>
          <Filter value={this.state.filter} onChange={this.handleChange} />
          <ContactsList
            contacts={this.getFilteredNames()}
            onRemoveBtnClick={this.removeContact}
          />
        </ContactsContainer>
      </>
    );
  }
}

export default App;
