import './product-card.scss';
import Button, {BUTTON_TYPE_CLASSES} from "../button/button";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart-context";

const ProductCard = ({product}) => {

    const { name, price, imageUrl } = product;
    const {addItemToCart} = useContext(CartContext);

    const addProductToCard = () => addItemToCart(product);

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCard}>Add to card</Button>
        </div>
    );
}

export default ProductCard;