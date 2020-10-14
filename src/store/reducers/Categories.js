import categoriesMock from '../../mocks/categories.json';

export default function(state = categoriesMock.categories, action) {
	switch (action.type) {
		default:
			return state;
	}
}
