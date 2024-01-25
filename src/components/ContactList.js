import React from 'react';
import ContactItem from './ContactItem';
import styles from './styles.module.css';

const ContactList = ({ contacts }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
