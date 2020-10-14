import { createStore, combineReducers } from 'redux';
import productsReducer from './reducers/Products';

const rootReducer = combineReducers({
    products: productsReducer,
});

const store = createStore(rootReducer);

export default store;
