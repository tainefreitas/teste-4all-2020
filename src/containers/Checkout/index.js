import React, { useState } from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import ItemCheckout from '../../components/ItemCheckout';
import {
	CheckoutTitle,
	CheckoutContainer,
	CheckoutTableHeader,
	CheckoutNoItems,
	CheckoutTotal,
	CheckoutButtonFinish,
	ModalContainer
} from './style';
import { selectAllProducts } from '../../store/selectors/selectors';

const Checkout = () => {
	const state = useSelector(selectAllProducts);
	const [ showModal, setShowModal ] = useState(false);

	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
			width: '50%',
			height: '30%'
		}
	};

	function handleOpenModal() {
		setShowModal(true);
	}

	function handleCloseModal() {
		setShowModal(false);
	}
	function handleClick() {
		handleOpenModal();
	}

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
					<CheckoutButtonFinish onClick={handleClick}>Finalizar Compra</CheckoutButtonFinish>
					<Modal
						isOpen={showModal}
						style={customStyles}
						onRequestClose={handleCloseModal}
						contentLabel="Example Modal"
					>
						<ModalContainer>
							<FontAwesomeIcon icon={faCheckCircle} size='5x' color='#336600' />
							<p>Pedido realizado com sucesso!</p>
							<CheckoutButtonFinish onClick={handleCloseModal}>Fechar</CheckoutButtonFinish>
						</ModalContainer>
					</Modal>
				</div>
			) : (
				<CheckoutNoItems>Não há itens selecionados</CheckoutNoItems>
			)}
		</Grid>
	);
};

export default Checkout;
