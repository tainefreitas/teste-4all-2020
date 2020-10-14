import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { Row } from 'react-flexbox-grid';

import { ImgCheckout, CheckoutItemContainer, TransparentButton } from './style';
import { removeProduct, removeQuantity, addQuantity } from '../../store/actions/Products';

const ItemCheckout = ({ item }) => {
	const dispatch = useDispatch();

	function handleRemoveProduct(id) {
		dispatch(removeProduct(id));
	}
	function handleRemoveQuantity(id) {
		dispatch(removeQuantity(id));
	}
	function handleAddQuantity(id) {
		dispatch(addQuantity(id));
	}
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
				<Row>
					<TransparentButton onClick={() => handleAddQuantity(item.id)}><FontAwesomeIcon icon={faPlusCircle} /> </TransparentButton>
					<p>{item.quantity}</p>
					<TransparentButton onClick={() => handleRemoveQuantity(item.id)}><FontAwesomeIcon icon={faMinusCircle} /></TransparentButton>
				</Row>
				<TransparentButton onClick={() => handleRemoveProduct(item.id)}>Remover</TransparentButton>
			</td>
			<td>
				<p>
					{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
						item.price * item.quantity
					)}
				</p>
			</td>
		</tr>
	);
};

export default ItemCheckout;
