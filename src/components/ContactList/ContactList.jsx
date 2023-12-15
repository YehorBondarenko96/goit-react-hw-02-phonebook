import { Component } from 'react';
import css from '../Styles.module.css';
import { ItemContact } from 'components/ItemContact/ItemContact';

export class ContactList extends Component {
    deleteItemContacts = (evt) => {
        const idContact = evt.currentTarget.id;
        this.props.updateStateForDelete(idContact)
    }
    render(){
        const contacts = this.props.dataContact.contacts;
    return(
        <ul className={css.listContacts}>
            {contacts.length !== 0 &&
            contacts.map((contact) => (
                <ItemContact 
                key={contact.id}
                contact={contact}
                deleteItemContacts={this.deleteItemContacts}
                />
            ))
            }
        </ul>
    )}
}