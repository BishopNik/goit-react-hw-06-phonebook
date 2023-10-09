/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/Helpers/GlobalStyle';
import { store } from './redux/store';
import { persistor } from './redux/store';

const theme = {
	spacing: x => `${x * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ThemeProvider theme={theme}>
					<App />
					<GlobalStyle />
				</ThemeProvider>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
