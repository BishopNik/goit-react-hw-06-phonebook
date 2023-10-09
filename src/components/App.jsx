/** @format */

import { ToastContainer } from 'react-toastify';
import Filter from './Filter';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import { Container, TitleName } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<Container>
			<TitleName>Phonebook</TitleName>

			<ContactForm />

			<TitleName>Contacts</TitleName>

			<Filter />

			<ContactList />

			<ToastContainer position='top-right' autoClose={5000} hideProgressBar={false} />
		</Container>
	);
}

export default App;
