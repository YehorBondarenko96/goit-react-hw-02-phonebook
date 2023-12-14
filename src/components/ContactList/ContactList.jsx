import css from '../Styles.module.css';

export const ContactList = ({dataContact}) => {
    const names = dataContact.name;
    const contacts = dataContact.contacts;
    return(
        <ul>
            {names &&
            contacts.map((contact) => (
            <li key={contact.id} className={css.itemContscts}>
                {contact.name}
            </li>
            ))
            }
        </ul>
    )
}