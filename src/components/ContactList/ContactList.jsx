import css from '../Styles.module.css';

export const ContactList = ({dataContact}) => {
    const contacts = dataContact.contacts;
    return(
        <ul className={css.listContacts}>
            {contacts.length !== 0 &&
            contacts.map((contact) => (
            <li key={contact.id} className={css.itemContscts}>
                <p className={css.pItemContacts}>{contact.name}: {contact.number}</p>
                <button className={css.buttonDelete} type='button'>Delete</button>
            </li>
            ))
            }
        </ul>
    )
}