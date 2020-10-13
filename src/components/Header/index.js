import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { HeaderContainer } from './style';

const Header = () => {
	return (
		<HeaderContainer xs={12} md={12}>
			<Link to="/">
				<h1>Teste 4all</h1>
			</Link>
			<Link to="/checkout">
				<button>
					<FontAwesomeIcon icon={faShoppingBag} />
				</button>
			</Link>
		</HeaderContainer>
	);
};

export default Header;
