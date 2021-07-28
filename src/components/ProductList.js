import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import Product from './Product';
import Title from './Title';

export default class ProductList extends Component {
	state = {
		products: [],
	};
	render() {
		return (
			<React.Fragment>
				<div className='py-5'>
					<div className='container'>
						<Title name='Our' title='Products' />
						<div className='row'>
							<ProductConsumer>
								{(value) => {
									return value.products.map((product) => (
										<Product key={product.id} product={product} />
									));
								}}
							</ProductConsumer>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
