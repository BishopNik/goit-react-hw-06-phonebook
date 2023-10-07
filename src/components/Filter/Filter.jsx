/** @format */

import PropTypes from 'prop-types';
import { FilterField, InputFilter } from './Filter.styled';

function Filter({ value, onFiltred }) {
	return (
		<FilterField>
			Find contacts by name
			<InputFilter
				value={value}
				type='text'
				name='filter'
				autoComplete='off'
				onChange={onFiltred}
			/>
		</FilterField>
	);
}

Filter.propTypes = {
	value: PropTypes.string.isRequired,
	onFiltred: PropTypes.func.isRequired,
};

export default Filter;
