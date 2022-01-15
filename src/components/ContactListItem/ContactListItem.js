import React from 'react';
import s from './ContactListItem.module.css';

const ContactListItem = ({ filteredContacts, onDeleteContact }) => {
  return filteredContacts().map(({ name, number, id }) => {
    return (
      <li className={s.item} key={name}>
        <p>
          <span>{name} </span>
          <span>{number}</span>
        </p>
        <button className={s.contactsbtn} onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </li>
    );
  });
};
export default ContactListItem;
