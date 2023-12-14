import css from '../Styles.module.css';

export const ContactList = ({dataContact}) => {
    const contacts = dataContact.contacts;
    return(
        <ul>
            {contacts.length !== 0 &&
            contacts.map((contact) => (
            <li key={contact.id} className={css.itemContscts}>
                {contact.name}: {contact.number}
            </li>
            ))
            }
        </ul>
    )
}