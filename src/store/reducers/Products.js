import productsMock from '../../mocks/products.json';
import categoriesMock from '../../mocks/categories.json';

const initialState = {
	products: productsMock.products,
	categories: categoriesMock.categories,
	selectedItems: [],
	total: 0
};
export default function(state = initialState, action) {
	switch (action.type) {
		case 'ADD_PRODUCT': {
			let addedItem = state.products.find((item) => item.id === action.payload);
			let existed_item = state.selectedItems.find((item) => action.payload === item.id);

			if (existed_item) {
				addedItem.quantity += 1;
				return {
					...state,
					total: state.total + addedItem.price
				};
			} else {
				addedItem.quantity = 1;
				let newTotal = state.total + addedItem.price;

				return {
					...state,
					selectedItems: [ ...state.selectedItems, addedItem ],
					total: newTotal
				};
			}
		}
		
		default:
			return state;
	}
}
