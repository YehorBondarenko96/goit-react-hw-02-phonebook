import { Component } from 'react';
import css from '../Styles.module.css';
import { ItemContact } from 'components/ItemContact/ItemContact';

export class ContactList extends Component {
    deleteItemContacts = (evt) => {
        const idContact = evt.currentTarget.id;
        this.props.updateStateForDelete(idContact)
    }
    render(){
        let contacts = this.props.dataContact.contacts;
        const filter = this.props.dataContact.filter.toLowerCase();
        if(filter.length > 0){
            contacts = contacts.filter(
                (contact) => (contact.name.toLowerCase().includes(filter))
                )
        }
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