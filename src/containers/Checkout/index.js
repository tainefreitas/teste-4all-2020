import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import ItemCheckout from '../../components/ItemCheckout';

const Checkout = () => {
	const itemsCart = [
		{
			id: 0,
			idCategory: 0,
			name: 'Coca Mini',
			description: 'Refrigerante Coca-Cola 250ml',
			price: 3.5,
			image: 'assets/img/products/coca_mini.jpg',
			quantity: 3
		},
		{
			id: 1,
			idCategory: 2,
			name: 'Croquete',
			description: 'Croquete de carne moída',
			price: 3.5,
			image: 'assets/img/products/croquete.jpg',
			quantity: 2
		},
		{
			id: 7,
			idCategory: 0,
			name: 'Pepsi',
			description: 'Pepsi lata 350ml',
			price: 3.5,
			image: 'assets/img/products/pepsi.jpg',
			quantity: 1
		}
	];
	const categoria = [
		{
			id: 0,
			name: 'Bebidas'
		},
		{
			id: 1,
			name: 'Doces'
		},
		{
			id: 2,
			name: 'Salgados'
		}
	];
	return (
		<Grid>
			<p>Finalizar Pedido</p>
			<Row>
				<table>
					<thead>
						<tr>
							<th>Item</th>
							<th>Quantidade</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody>
						{itemsCart.map((item) => {
							return (
								<ItemCheckout item={item} category={categoria[item.idCategory].name} key={item.id} />
							);
						})}
					</tbody>
				</table>
			</Row>
		</Grid>
	);
};

export default Checkout;
