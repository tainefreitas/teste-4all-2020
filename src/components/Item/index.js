import React from 'react';
import { useDispatch } from 'react-redux';
import { CardContainer, CardImg, CardBtn, CardTitle, CardCategory, CardPrice } from './style';
import { addProduct } from '../../store/actions/Products';

const Item = ({ item, category }) => {
	const dispatch = useDispatch();
	function handleClick (id) {
		dispatch(addProduct(id))
	  }
	return (
		<CardContainer xs={12} sm={12} md={3}>
			<CardImg src={require(`../../${item.image}`)} alt={item.description} />
			<CardTitle>{item.name}</CardTitle>
			<CardCategory>{category}</CardCategory>
			<CardPrice>
				{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}
			</CardPrice>
			<CardBtn onClick = {() => handleClick(item.id)}> Adicionar ao carrinho</CardBtn>
		</CardContainer>
	);
};

export default Item;
