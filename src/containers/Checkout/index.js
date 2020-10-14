import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import { useSelector } from 'react-redux';
import ItemCheckout from '../../components/ItemCheckout';
import { CheckoutTitle, CheckoutContainer, CheckoutTableHeader, CheckoutNoItems } from './style';
import { selectAllProducts } from '../../store/selectors/selectors';
import { CardBtn } from '../../components/Item/style';
const Checkout = () => {
	const state = useSelector(selectAllProducts);
	return (
		<Grid>
			<CheckoutTitle>Finalizar Pedido</CheckoutTitle>
			{state.selectItems ? (
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
								{state.selectItems.map((item) => {
									return (
										<ItemCheckout
											item={item}
											category={state.category[item.idCategory].name}
											key={item.id}
										/>
									);
								})}
							</tbody>
						</CheckoutContainer>
					</Row>
					<Row>
						<p>Total dos produtos: </p>
						<p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(state.total)}</p>
					</Row>
					<CardBtn>Finalizar Compra</CardBtn>
				</div>
			) : (
				<CheckoutNoItems>Não há itens selecionados</CheckoutNoItems>
			)}
		</Grid>
	);
};

export default Checkout;
