import "./style.css"
import ProductImage from '../../assets/products-images';

const ProductCard = ({productName, price}) => {
    const image = ProductImage[productName];
    return (
        <div className = "product-box">
            <img src={image} />
            <h3>{productName}</h3>
            <p>R${price}</p>
        </div>
    );
};

export default ProductCard;