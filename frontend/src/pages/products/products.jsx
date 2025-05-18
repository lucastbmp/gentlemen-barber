import React from 'react';
import Product from '../../components/products-card/products-card';
import './style.css';

const productArr = [
    { productName: 'Loção', price: '60' },
    { productName: 'Shampoo', price: '60' },
    { productName: 'Óleo', price: '60' },
    { productName: 'Shampoo Fresh Men', price: '60'},
    { productName: 'Pomada Modeladora', price: '60'},
    { productName: 'Gel', price: '60'},
    { productName: 'Balm', price: '60'},
];

export default function Products() {
    return (
        <>
		<section className="products-section" id="products">
            <div id="products">
                <div className="product-content">
                    <h1>Nossos produtos</h1>
                    <div className="products-grid">
                        {productArr.map((produto) => (
                            <Product
                                key={produto.productName}
                                productName={produto.productName}
                                price={produto.price}
                            />
                        ))}
                    </div>
                </div>
            </div>
		</section>
        </>
    );
}
