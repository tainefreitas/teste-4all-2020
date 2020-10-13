import React from 'react';
import { ImgCheckout } from './style';

const ItemCheckout = ({ item }) => {
	return (
		<tr>
			<td>
				<div>
					<ImgCheckout src={require(`../../${item.image}`)} alt={item.description} />
					<div>
						<p>{item.name}</p>
						<p>{item.price}</p>
					</div>
				</div>
			</td>
			<td>
				<p>{item.quantity}</p>
			</td>
			<td>
				<p>{item.price * item.quantity}</p>
			</td>
		</tr>
	);
};

export default ItemCheckout;
