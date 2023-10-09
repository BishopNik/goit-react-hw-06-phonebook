/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { newContacts, afterDelContacts } from './actions';

const initialState = {
	array: [
		{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
		{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
		{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
		{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
	],
};

export const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		addContact: (state, action) => {
			state.array = newContacts(state.array, action.payload);
		},
		delContact: (state, action) => {
			state.array = afterDelContacts(state.array, action.payload);
		},
	},
});

export const { addContact, delContact } = contactsSlice.actions;

export default contactsSlice.reducer;
