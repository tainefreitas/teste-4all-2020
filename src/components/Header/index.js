import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { HeaderContainer, HeaderText, HeaderCartButton, HeaderLink } from './style';

const Header = () => {
	return (
		<HeaderContainer xs={12} md={12}>
				<HeaderLink to="/">
					<HeaderText>Teste 4all</HeaderText>
				</HeaderLink>
				<HeaderLink to="/checkout">
					<HeaderCartButton>
						<FontAwesomeIcon icon={faShoppingBag} />
					</HeaderCartButton>
				</HeaderLink>
		</HeaderContainer>
	);
};

export default Header;
