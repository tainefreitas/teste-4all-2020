import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import Product from './containers/Product';
import Checkout from './containers/Checkout';

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact>
				<Home />
			</Route>
			<Route path="product" exact>
				<Product />
			</Route>
			<Route path="checkout" exact>
				<Checkout />
			</Route>
		</Switch>
	);
};

export default Routes;