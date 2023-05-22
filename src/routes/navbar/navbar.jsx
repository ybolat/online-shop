import {Outlet} from 'react-router-dom';
import {Fragment, useContext} from "react";
import {ReactComponent as UdemyLogo} from "../../assets/crown.svg";
import {UserContext} from "../../contexts/user-context";
import {signOutUser} from "../../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import {CartContext} from "../../contexts/cart-context";
import {LogoContainer, NavigationContainer, NavLink, NavLinks} from "./navbar.style";

const Navbar = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    return <Fragment>
        <NavigationContainer>
            <LogoContainer to={"/"}>
                <UdemyLogo className={"logo"}/>
            </LogoContainer>
            <NavLinks>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>
                {currentUser ?
                    <NavLink as={"span"} onClick={signOutUser}>SIGN OUT</NavLink> :
                    <NavLink to={"/auth"}>SIGN IN</NavLink>
                }
                <CartIcon/>
            </NavLinks>
            {isCartOpen && <CartDropdown/>}
        </NavigationContainer>
        <Outlet/>
    </Fragment>
}

export default Navbar;