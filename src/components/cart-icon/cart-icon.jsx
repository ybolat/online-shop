import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import './cart-icon.scss';
import {useContext} from "react";
import {CartContext} from "../../contexts/cart-context";

const CartIcon = () => {
    const {isCartOpen ,setIsCartOpen} = useContext(CartContext);

    return (
        <div className={'cart-icon-container'} onClick={() => setIsCartOpen(!isCartOpen)}>
            <ShoppingIcon className={'shopping-icon'}/>
            <span className={'item-count'}>0</span>
        </div>
    );
}

export default CartIcon;