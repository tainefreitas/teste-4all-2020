import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { HeaderContainer } from './style';

const Header = () => {
	return (
		<HeaderContainer>
			<h1>Teste 4all</h1>
			<button><FontAwesomeIcon icon={faShoppingBag} /></button>
		</HeaderContainer>
	);
};

export default Header;
