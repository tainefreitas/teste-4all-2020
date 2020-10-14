import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import { useSelector } from 'react-redux';
import Item from '../../components/Item';
import {selectAllProducts} from '../../store/selectors/selectors';

const Home = () => {
	const state  = useSelector(selectAllProducts);
	return (
		<Grid>
			<Row>
				{state.products.map((item) => {
					return <Item item={item} category={state.categories[item.idCategory].name} key={item.id} />;
				})}
			</Row>
		</Grid>
	);
};

export default Home;
