/** @format */

import { ToastContainer } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import Filter from './Filter';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import { toastWindow } from './Helpers';
import { Container, TitleName } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';
import { contactsState } from '../redux/selectors';
import { addContact } from '../redux/contactsSlice';

function App() {
	const dispatch = useDispatch();
	const contacts = useSelector(contactsState);

	const handleAddContact = ({ name, number }) => {
		const checkName = contacts.find(
			contact => contact.name.toLowerCase() === name.toLowerCase()
		);
		if (checkName) {
			toastWindow(`${checkName.name} is already in contacts.`);
			return { name, number };
		}

		dispatch(addContact({ id: nanoid(), name, number }));

		return { name: '', number: '' };
	};

	return (
		<Container>
			<TitleName>Phonebook</TitleName>

			<ContactForm onSubmitForm={handleAddContact} />

			<TitleName>Contacts</TitleName>

			<Filter />

			<ContactList />

			<ToastContainer position='top-right' autoClose={5000} hideProgressBar={false} />
		</Container>
	);
}

export default App;
