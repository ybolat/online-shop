import Button from "../button/button";
import {useNavigate} from 'react-router-dom';
import CartItem from "../cart-item/cart-item";
import {CartDropDownContainer, CartItems, EmptyMessage} from "./cart-dropdown.style";
import {useSelector} from "react-redux";
import {selectCartItems} from "../../store/cart/cart.selector";

const CartDropdown = () => {

    const cartItems = useSelector(selectCartItems);
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