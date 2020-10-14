import { createStore, combineReducers } from 'redux';
import productsReducer from './reducers/Products';
import categoriesReducer from './reducers/Categories';

const rootReducer = combineReducers({
    products: productsReducer,
    categories: categoriesReducer
});

const store = createStore(rootReducer);

export default store;
