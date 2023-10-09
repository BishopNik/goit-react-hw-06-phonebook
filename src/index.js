/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/Helpers/GlobalStyle';
import { store } from './components/Redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={{}}>
				<App />
				<GlobalStyle />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
);
