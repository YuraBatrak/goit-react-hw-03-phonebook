import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import ContactListItem from '../ContactListItem/ContactListItem';

class ContactList extends Component {
  render() {
    const { filteredContacts, onDeleteContact } = this.props;

    return (
      <>
        {filteredContacts().length ? (
          <ul className={s.list}>
            <ContactListItem
              filteredContacts={filteredContacts}
              onDeleteContact={onDeleteContact}
            />
          </ul>
        ) : (
          <p>Contact list is empty</p>
        )}
      </>
    );
  }
}

ContactList.propTypes = {
  filteredContacts: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
