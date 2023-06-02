import {
  ContactList,
  ContactItem,
  ContactName,
  RemoveButton,
} from './ContactList.styled';

export default function ContactsList({ contacts, onRemoveBtnClick }) {
  return (
    <ContactList>
      {contacts.map(contact => {
        return (
          <ContactItem key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <RemoveButton
              type="button"
              onClick={() => onRemoveBtnClick(contact.id)}
            >
              Delete
            </RemoveButton>
          </ContactItem>
        );
      })}
    </ContactList>
  );
}
