import React, { useState } from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import { useSelector } from 'react-redux';
import Item from '../../components/Item';
import { selectAllProducts } from '../../store/selectors/selectors';
import { SelectContainer, SelectComponent } from './style';

const Home = () => {
	const state = useSelector(selectAllProducts);
	const [ filteredProducts, setFilteredProducts ] = useState(state.products);

	function handleChange(e) {
		console.log(e.target.value);
		if (e.target.value === 'no_category') setFilteredProducts(state.products);
		else {
			let filteredItems = state.products.filter((item) => item.idCategory === parseInt(e.target.value));
			setFilteredProducts(filteredItems);
		}
	}

	return (
		<Grid>
			<SelectContainer>
				<SelectComponent name="categories" id="categories" onChange={handleChange}>
					<option value="no_category">{' '} </option>
					{state.categories.map((category) => {
						return (
							<option value={category.id} key={category.id}>
								{category.name}
							</option>
						);
					})}
				</SelectComponent>
			</SelectContainer>
			<Row>
				{filteredProducts.map((item) => {
					return <Item item={item} category={state.categories[item.idCategory].name} key={item.id} />;
				})}
			</Row>
		</Grid>
	);
};

export default Home;
