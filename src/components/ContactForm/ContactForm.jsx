/** @format */

import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { contactsState } from '../../redux/selectors';
import { addContact } from '../../redux/contactsSlice';
import { toastWindow } from '../Helpers';
import * as yup from 'yup';
import { Label, FormikContact, InputFormik, AddButton } from './ContactForm.styled.jsx';

function ContactForm({ onSubmitForm }) {
	const dispatch = useDispatch();
	const contacts = useSelector(contactsState);

	const schema = yup.object({
		name: yup.string().min(2).required('Name is required'),
		number: yup.string().min(6).max(13).required('Number is required'),
	});

	const handleClick = ({ target }) => {
		target.style.scale = '0.9';
		setTimeout(() => (target.style.scale = '1'), 80);
	};

	const handleAddContact = ({ name, number }) => {
		let status = true;
		const checkName = contacts.find(
			contact => contact.name.toLowerCase() === name.toLowerCase()
		);
		if (checkName) {
			toastWindow(`${checkName.name} is already in contacts.`);
			status = false;
			return status;
		}

		dispatch(addContact({ id: nanoid(), name, number }));

		return status;
	};

	const handleSubmit = (contact, actions) => {
		schema
			.validate(contact)
			.then(() => {
				handleAddContact(contact) && actions.resetForm();
			})
			.catch(validationErrors => {
				toastWindow(`Error: ${validationErrors.errors}`);
			});
	};

	return (
		<>
			<Formik
				initialValues={{
					name: '',
					number: '',
				}}
				onSubmit={handleSubmit}
			>
				<FormikContact>
					<Label>
						Name
						<InputFormik
							type='text'
							name='name'
							pattern="^[a-zA-Zа-яА-Я]+([' \-]?[a-zA-Zа-яА-Я ])*$"
							title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
							required
							autoComplete='off'
							placeholder='Aneta'
						/>
					</Label>

					<Label>
						Number
						<InputFormik
							type='tel'
							name='number'
							pattern='\+?\d{1,4}[\-.\s]?\(?\d{1,3}\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}'
							title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
							required
							autoComplete='off'
							placeholder='48-787-453-876'
						/>
					</Label>

					<AddButton type='submit' onClick={handleClick}>
						Add contact
					</AddButton>
				</FormikContact>
			</Formik>
		</>
	);
}

export default ContactForm;
