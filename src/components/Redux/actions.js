/** @format */

export const newContacts = (contacts, contact) => [...contacts, contact];

export const afterDelContacts = (contacts, id) => contacts.filter(contact => contact.id !== id);
