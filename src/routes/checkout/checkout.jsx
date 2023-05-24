import './checkout.scss';
import CheckoutItem from "../../components/checkout-item/checkout-item";
import {useSelector} from "react-redux";
import {selectCartItems, selectCartTotal} from "../../store/cart/cart.selector";

const Checkout = () => {

    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <div className={"checkout-container"}>
            <div className={"checkout-header"}>
                <div className={"header-block"}>
                    <span>Product</span>
                </div>
                <div className={"header-block"}>
                    <span>Description</span>
                </div>
                <div className={"header-block"}>
                    <span>Quantity</span>
                </div>
                <div className={"header-block"}>
                    <span>Price</span>
                </div>
                <div className={"header-block"}>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(v => <CheckoutItem key={v.id} cartItem={v}/>)}
            <span className={"total"}>Total: ${cartTotal}</span>
        </div>
    );
}

export default Checkout;