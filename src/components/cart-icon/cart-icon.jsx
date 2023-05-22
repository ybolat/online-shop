import {useContext} from "react";
import {CartContext} from "../../contexts/cart-context";
import {CartIconContainer, ItemCount, ShoppingIcon} from "./cart-icon.style";

const CartIcon = () => {
    const {isCartOpen ,setIsCartOpen, cartCount} = useContext(CartContext);

    return (
        <CartIconContainer onClick={() => setIsCartOpen(!isCartOpen)}>
            <ShoppingIcon className={'shopping-icon'}/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;