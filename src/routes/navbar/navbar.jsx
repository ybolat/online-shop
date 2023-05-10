import {Link, Outlet} from 'react-router-dom';
import {Fragment, useContext} from "react";
import {ReactComponent as UdemyLogo} from "../../assets/crown.svg";
import './navbar.scss';
import {UserContext} from "../../contexts/user-context";
import {signOutUser} from "../../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import {CartContext} from "../../contexts/cart-context";

const Navbar = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    return <Fragment>
        <div className={"navbar"}>
            <Link className={"logo-container"} to={"/"}>
                <UdemyLogo className={"logo"}/>
            </Link>
            <div className={"nav-links-container"}>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                {currentUser ?
                    <span className={"nav-link"} onClick={signOutUser}>SIGN OUT</span> :
                    <Link className={"nav-link"} to={"/auth"}>SIGN IN</Link>
                }
                <CartIcon/>
            </div>
            {isCartOpen && <CartDropdown/>}
        </div>
        <Outlet/>
    </Fragment>
}

export default Navbar;