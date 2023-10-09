/** @format */

import { useSelector, useDispatch } from 'react-redux';
import { ContactContainer, Contact, DelDutton } from './ContactList.styled';
import { filterState, contactsState } from '../../redux/selectors';
import { delContact } from '../../redux/contactsSlice';

function ContactList() {
	const dispatch = useDispatch();
	const filterValue = useSelector(filterState);
	const contacts = useSelector(contactsState);
	const filteredContacts = contacts.filter(contact =>
		contact.name.toLowerCase().includes(filterValue?.toLowerCase())
	);

	return (
		<>
			{filteredContacts.map(({ id, name, number }) => (
				<ContactContainer key={id}>
					<Contact>
						{name} {number}
					</Contact>
					<DelDutton
						id={id}
						type='submit'
						onClick={({ target }) => dispatch(delContact(target.id))}
					>
						Delete
					</DelDutton>
				</ContactContainer>
			))}
		</>
	);
}

export default ContactList;
