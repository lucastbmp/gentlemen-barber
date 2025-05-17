import "./style.css"
import ProductImage from '../../assets/products-images';

const ProductCard = ({productName, price}) => {
    const image = ProductImage[productName];
    const message = `Olá! Tenho interesse em comprar o produto ${productName} por R$${price}.`;
    const whatsappLink = `https://wa.me/5513981370797?text=${encodeURIComponent(message)}`;

    return (
        <div className="product-box">
            <img src={image} />
            <h3>{productName}</h3>
            <p>R${price}</p>
            <a className="buy-button" href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Comprar
            </a>
        </div>
    );
};

export default ProductCard;