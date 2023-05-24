import './product-card.scss';
import Button, {BUTTON_TYPE_CLASSES} from "../button/button";
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart} from "../../store/cart/cart.action";
import {selectCartItems} from "../../store/cart/cart.selector";

const ProductCard = ({product}) => {

    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);
    const {name, price, imageUrl} = product;

    const addProductToCard = () => dispatch(addItemToCart(cartItems, product));

    return (<div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCard}>Add to card</Button>
        </div>);
}

export default ProductCard;