    import React from 'react';
    import Product from '../../components/products-card/products-card';
    import './style.css';
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";
    import Slider from "react-slick";

    const productArr = [
    { productName: 'Loção', price: '60' },
    { productName: 'Shampoo', price: '60' },
    { productName: 'Óleo', price: '60' },
    { productName: 'Shampoo Fresh Men', price: '60' },
    { productName: 'Pomada Modeladora', price: '60' },
    { productName: 'Gel', price: '60' },
    { productName: 'Balm', price: '60' },
    ];

    export default function Products() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    const settings = {
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        infinite: false,
        speed: 500,
        arrows: true,
        dots: false,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            centerPadding: '40px',
            }
        },
        {
            breakpoint: 768,
            settings: {
            centerPadding: '20px',
            arrows: false,
            }
        }
        ]
    };

    return (
        <section className="products-section" id="products">
        <div className="product-content">
            <h1>Nossos produtos</h1>
            <Slider className="products-carousel" {...settings}>
            {productArr.map((produto) => (
                <div key={produto.productName} className="carousel-slide">
                <Product
                    productName={produto.productName}
                    price={produto.price}
                />
                </div>
            ))}
            </Slider>
        </div>
        </section>
    );
    }
