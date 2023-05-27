import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  getContacts,
  visibleContact,
  getIsLoading,
  getError,
} from 'redux/contacts/selectors';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import {
  TitleContactList,
  Notification,
  TextErrorPage,
} from 'components/App.styled';
import { useState } from 'react';
import { EditModal } from 'components/EditModal/EditModal';

function ContactsPage() {
  const [isModal, setIsModal] = useState(false);
  const [userName, setUserName] = useState('');
  const [idUser, setIdUser] = useState('');
  const [userNamber, setUserNamber] = useState('');
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContacts);
  const getFilteredContacts = useSelector(visibleContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isOpenModal = (name, number, id) => {
    setIsModal(true);
    setUserName(name);
    setUserNamber(number);
    setIdUser(id);
  };

  const isCloseModal = () => {
    setIsModal(false);
  };

  return (
    <>
      <TitleContactList>Contacts</TitleContactList>
      <ContactForm />

      {isLoading && <div>Loading...</div>}
      {contacts.length === 0 && !isLoading && !error && (
        <Notification>There is nothing in phonebook</Notification>
      )}

      {contacts.length !== 0 && (
        <div>
          <Filter />
          {getFilteredContacts.length === 0 && !isLoading && (
            <Notification>There isn't any contact with this name</Notification>
          )}
          <ContactList isOpenModal={isOpenModal} />
        </div>
      )}

      {error && <TextErrorPage>Try again, please..</TextErrorPage>}
      {isModal && (
        <EditModal
          name={userName}
          number={userNamber}
          idUser={idUser}
          isCloseModal={isCloseModal}
        />
      )}
    </>
  );
}

export default ContactsPage;
