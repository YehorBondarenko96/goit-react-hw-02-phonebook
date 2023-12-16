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

  updateStateForAdd = (evt) => {
    evt.preventDefault();
    const newName = evt.currentTarget.elements.name.value;
    const newNumb = evt.currentTarget.elements.number.value;
    const contactsInState = this.state.contacts;
    if(!contactsInState.some(contact => contact.name.toLowerCase() === newName.toLowerCase())){
      this.setState((state) => ({
          contacts: [...state.contacts, 
          {id: nanoid(), name: newName, number: newNumb}]
        }))
    } else{
      alert(`${newName} is already in contacts.`)
    }
    evt.currentTarget.reset();
  };

  updateStateForDelete = (evt) => {
    const idContact = evt.currentTarget.id;
    const newContactsForState = this.state.contacts.filter((contact) => (contact.id !== idContact));
    this.setState((state) => ({
      contacts: [...newContactsForState]
    }))
  };

  updateStateForFilter = (evt) => {
    evt.preventDefault();
    const filterValue = evt.target.value;
    this.setState((state) => ({
      filter: filterValue
    }))
  };

  render(){

    const filterWithState = this.state.filterWithState;

    let contacts = this.state.contacts;
    const filter = this.state.filter;
    if(filter.length > 0){
      contacts = contacts.filter(
          (contact) => (contact.name.toLowerCase().includes(filter.toLowerCase()))
          )
    }

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
  filterWithState={filterWithState}
  updateStateForFilter={this.updateStateForFilter}
  />
  <ContactList 
  contacts={contacts}
  updateStateForDelete={this.updateStateForDelete}
  />
</div>
    </div>
  )}
};
