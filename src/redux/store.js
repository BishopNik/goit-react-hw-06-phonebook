/** @format */

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import filterSlice from './filterSlice';
import contactsSlice from './contactsSlice';

const persistConfig = {
	key: 'contacts',
	storage,
};

const contactsPersistedReducer = persistReducer(persistConfig, contactsSlice);

export const store = configureStore({
	reducer: {
		filter: filterSlice,
		contacts: contactsPersistedReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
