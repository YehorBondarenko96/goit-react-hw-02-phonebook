import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import css from './Styles.module.css';
import { nanoid } from "nanoid";

export class App extends Component {
  state = {
    contacts: [],
    filters: ''
  };

  updateStateForAdd = (newName, newNumb) => {
    const contactsInState = this.state.contacts;
    if(!contactsInState.some(contact => contact.name === newName)){
      this.setState((state) => ({
          contacts: [...state.contacts, 
          {id: nanoid(), name: newName, number: newNumb}]
        }))
    } else{
      alert(`${newName} is already in contacts.`)
    }};

  updateStateForDelete = (idContact) => {
    const newContactsForState = this.state.contacts.filter((contact) => (contact.id !== idContact));
    this.setState((state) => ({
      contacts: [...newContactsForState]
    }))
  }

  render(){
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        fontSize: 20,
        color: '#010101',
        margin: 20
      }}
    >
      <div>
  <h1 className={css.phonebook}>Phonebook</h1>
  <ContactForm 
  updateStateForAdd={this.updateStateForAdd}
  />

  <h2 className={css.contacts}>Contacts</h2>
  {/* <Filter ... /> */}
  <ContactList 
  dataContact={this.state}
  updateStateForDelete={this.updateStateForDelete}
  />
</div>
    </div>
  )}
};
