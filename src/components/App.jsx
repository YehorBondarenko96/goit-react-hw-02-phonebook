import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import css from './Styles.module.css';
import { nanoid } from "nanoid";

export class App extends Component {
  state = {
    contacts: [],
    name: ''
  };

  updateState = (newName, newNumb) => {
    const contactsInState = this.state.contacts;
    if(!contactsInState.some(contact => contact.name === newName)){
      this.setState((state) => ({
        // name: [...state.name, newName],
          contacts: [...state.contacts, 
          {id: nanoid(), name: newName, number: newNumb}]
        }))
    }};

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
  // dataState={this.state}
  updateState={this.updateState}
  />

  <h2 className={css.contacts}>Contacts</h2>
  {/* <Filter ... /> */}
  <ContactList dataContact={this.state}/>
</div>
    </div>
  )}
};
