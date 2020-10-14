import React from 'react';
import { ImgCheckout, CheckoutItemContainer } from './style';

const ItemCheckout = ({ item }) => {
	return (
		<tr>
			<td>
				<CheckoutItemContainer>
					<ImgCheckout src={require(`../../${item.image}`)} alt={item.description} />
					<div>
						<p>{item.name}</p>
						<p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}</p>
					</div>
				</CheckoutItemContainer>
			</td>
			<td>
				<p>{item.quantity}</p>
			</td>
			<td>
				<p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(item.price * item.quantity)}</p>
			</td>
		</tr>
	);
};

export default ItemCheckout;
