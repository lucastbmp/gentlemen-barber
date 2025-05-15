import React from 'react'
import { Link } from 'react-router-dom';
import DhBG from "../../assets/images/dh-img.jpg"
import Product from '../../components/products-card';"../../components/products-card/index"
import './style.css'

const productArr = [
	{productName: 'Loção', price:'60'},
	{productName: 'Shampoo', price:'60'},
	{productName: 'Óleo', price:'60'},
];

export default function Products() {
    return (
	<>
	    <div className="main-wrapper">
	        <div className="product-content">
	        	<h1>Conheça nossos produtos</h1>
				<div className="produtos-grid">
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
	</>
    )
}
