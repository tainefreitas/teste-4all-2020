import React from 'react';
import { CardContainer, CardImg, CardBtn, CardTitle, CardCategory, CardPrice } from './style';
import { Link } from 'react-router-dom';

const Item = ({ item, category }) => {
	return (
		<CardContainer xs={12} sm={12} md={3}>
			<Link to="/product">
				<CardImg src={require(`../../${item.image}`)} alt={item.description} />
				<CardTitle>{item.name}</CardTitle>
			</Link>
			<CardCategory>{category}</CardCategory>
			<CardPrice>
				{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}
			</CardPrice>
			<CardBtn> Adicionar ao carrinho</CardBtn>
		</CardContainer>
	);
};

export default Item;
