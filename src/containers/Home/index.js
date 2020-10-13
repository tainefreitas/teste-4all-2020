import React from 'react';
import { Container, Row } from 'react-grid-system';
import Item from '../../components/Item';


const Home = () =>{
    const produtos = [
		{
			id: 0,
			idCategory: 0,
			name: 'Coca Mini',
			description: 'Refrigerante Coca-Cola 250ml',
			price: 3.5,
			image: 'assets/img/products/coca_mini.jpg'
		},
		{
			id: 1,
			idCategory: 2,
			name: 'Croquete',
			description: 'Croquete de carne moída',
			price: 3.5,
			image: 'assets/img/products/croquete.jpg'
		},
		{
			id: 2,
			idCategory: 2,
			name: 'Coxinha',
			description: 'Coxinha com recheio de frango',
			price: 3.5,
			image: 'assets/img/products/coxinha.jpg'
		},
		{
			id: 3,
			idCategory: 1,
			name: 'Brigadeiro',
			description: 'Brigadeiro tradicional',
			price: 3.5,
			image: 'assets/img/products/brigadeiro.jpg'
		},
		{
			id: 4,
			idCategory: 1,
			name: 'Chocolate Laka',
			description: 'Chocolate Laka Branco 90g',
			price: 3.5,
			image: 'assets/img/products/laka.jpg'
		},
		{
			id: 5,
			idCategory: 1,
			name: 'Fatia de Bolo',
			description: 'Fatia de bolo 100g',
			price: 3.5,
			image: 'assets/img/products/bolo_fatia.jpg'
		},
		{
			id: 6,
			idCategory: 2,
			name: 'Pastel',
			description: 'Pastel sabor carne',
			price: 3.5,
			image: 'assets/img/products/pastel.jpg'
		},
		{
			id: 7,
			idCategory: 0,
			name: 'Pepsi',
			description: 'Pepsi lata 350ml',
			price: 3.5,
			image: 'assets/img/products/pepsi.jpg'
		},
	
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
        <Container fluid>
        <Row>
            {produtos.map((item) => {
                return <Item item={item} category={categoria[item.idCategory].name} key={item.id} />;
            })}
        </Row>
    </Container>
    )
};

export default Home;