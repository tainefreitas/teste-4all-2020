import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import { useSelector } from 'react-redux';
import ItemCheckout from '../../components/ItemCheckout';
import { CheckoutTitle, CheckoutContainer, CheckoutTableHeader, CheckoutNoItems, CheckoutTotal, CheckoutButtonFinish } from './style';
import { selectAllProducts } from '../../store/selectors/selectors';
const Checkout = () => {
	const state = useSelector(selectAllProducts);
	console.log('carrinho: ', state.categories);
	return (
		<Grid>
			<CheckoutTitle>Finalizar Pedido</CheckoutTitle>
			{state.selectedItems.length ? (
				<div>
					<Row>
						<CheckoutContainer>
							<CheckoutTableHeader>
								<tr>
									<th>Item</th>
									<th>Quantidade</th>
									<th>Total</th>
								</tr>
							</CheckoutTableHeader>
							<tbody>
								{state.selectedItems.map((item) => {
									return <ItemCheckout item={item} key={item.id} />;
								})}
							</tbody>
						</CheckoutContainer>
					</Row>
					<Row>
						<CheckoutTotal>
							Total dos produtos:{' '}
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(state.total)}
						</CheckoutTotal>
					</Row>
					<CheckoutButtonFinish>Finalizar Compra</CheckoutButtonFinish>
				</div>
			) : (
				<CheckoutNoItems>Não há itens selecionados</CheckoutNoItems>
			)}
		</Grid>
	);
};

export default Checkout;
