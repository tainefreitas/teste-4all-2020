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
		case 'REMOVE_PRODUCT': {
			let itemToRemove = state.products.find((item) => item.id === action.payload);
			let new_items = state.selectedItems.filter((item) => action.payload !== item.id);
			let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
			return {
				...state,
				selectedItems: new_items,
				total: newTotal
			};
		}
		case 'ADD_QUANTITY': {
			let addedItem = state.selectedItems.find((item) => item.id === action.payload);
			addedItem.quantity += 1;
			let newTotal = state.total + addedItem.price;
			return {
				...state,
				total: newTotal
			};
		}
		case 'REMOVE_QUANTITY': {
			let addedItem = state.selectedItems.find((item => item.id === action.payload))
			if (addedItem.quantity === 1){
				let new_items = state.selectedItems.filter (item => item.id !== action.payload)
				let newTotal = state.total - addedItem.price
				return{
					...state,
					selectedItems: new_items,
					total: newTotal
				}
			}
			else {
				addedItem.quantity-= 1
				let newTotal = state.total -addedItem.price
				return{
					...state,
					total: newTotal
				}
			}
		}
		case 'CLEAR_CHECKOUT':{
			return {
				...state,
				selectedItems: []
			}
		}
		default:
			return state;
	}
}
