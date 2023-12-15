import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import css from './Styles.module.css';
import { nanoid } from "nanoid";

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  };

  updateStateForAdd = (newName, newNumb) => {
    const contactsInState = this.state.contacts;
    if(!contactsInState.some(contact => contact.name.toLowerCase() === newName.toLowerCase())){
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
  };

  updateStateForFilter = (filterValue) => {
    this.setState((state) => ({
      filter: filterValue
    }))
  };

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
  <Filter
  filterWithState={this.state.filter}
  updateStateForFilter={this.updateStateForFilter}
  />
  <ContactList 
  dataContact={this.state}
  updateStateForDelete={this.updateStateForDelete}
  />
</div>
    </div>
  )}
};
