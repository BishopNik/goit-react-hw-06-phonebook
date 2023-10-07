/** @format */

import PropTypes from 'prop-types';
import { ContactContainer, Contact, DelDutton } from './ContactList.styled';

function ContactList({ contacts, onDeleteContact }) {
	return (
		<>
			{contacts.map(({ id, name, number }) => (
				<ContactContainer key={id}>
					<Contact>
						{name} {number}
					</Contact>
					<DelDutton id={id} type='submit' onClick={onDeleteContact}>
						Delete
					</DelDutton>
				</ContactContainer>
			))}
		</>
	);
}

ContactList.propTypes = {
	contacts: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.string.isRequired,
		})
	).isRequired,
	onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
