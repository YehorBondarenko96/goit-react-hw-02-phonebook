import { Component } from 'react';
import css from '../Styles.module.css';

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
            <li key={contact.id} className={css.itemContscts}>
                <p className={css.pItemContacts}>{contact.name}: {contact.number}</p>
                <button id={contact.id} className={css.buttonDelete} type='button' onClick={this.deleteItemContacts}>
                    Delete
                </button>
            </li>
            ))
            }
        </ul>
    )}
}