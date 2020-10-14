import productsMock from '../../mocks/products.json';
import categoriesMock from '../../mocks/categories.json';

const initialState ={
    products: productsMock.products,
    categories: categoriesMock.categories,
    selectedItems: [],
    total: 0

}
export default function(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}
