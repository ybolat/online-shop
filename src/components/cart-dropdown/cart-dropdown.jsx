import Button from "../button/button";
import {useContext} from "react";
import { useNavigate } from 'react-router-dom';
import {CartContext} from "../../contexts/cart-context";
import CartItem from "../cart-item/cart-item";
import {CartDropDownContainer, CartItems, EmptyMessage} from "./cart-dropdown.style";

const CartDropdown = () => {

    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckOutHandler = () => {
        navigate("/checkout");
    }

    return (
        <CartDropDownContainer>
            <CartItems>
                {cartItems.length ? cartItems.map(item => (
                    <CartItem key={item.id} cartItem={item}/>
                )) : <EmptyMessage>Your cart is empty</EmptyMessage>}
            </CartItems>
            <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
        </CartDropDownContainer>
    );
}

export default CartDropdown;