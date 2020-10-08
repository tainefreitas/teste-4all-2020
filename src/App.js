import React from 'react';
import Header from './components/Header';

function App() {
	const produtos = [
		{
			id: 0,
			idCategory: 0,
			name: 'Coquinha',
			description: 'Eu detesto',
			price: 3.5,
			image: '/static/images/coca.png'
		},
		{
			id: 1,
			idCategory: 2,
			name: 'Croquete',
			description: 'Que fome',
			price: 3.5,
			image: '/static/images/croquete.png'
		}
	];
	const categoria = [
		{
			id: 0,
			name: 'Bebidas'
		},
		{
			id: 1,
			name: 'Doces'
		},
		{
			id: 2,
			name: 'Salgados'
		}
	];
	return (
		<div className="App">
			<Header />
		</div>
	);
}

export default App;
