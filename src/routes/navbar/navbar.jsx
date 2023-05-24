import {Outlet} from 'react-router-dom';
import {Fragment} from "react";
import {ReactComponent as UdemyLogo} from "../../assets/crown.svg";
import {signOutUser} from "../../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import {LogoContainer, NavigationContainer, NavLink, NavLinks} from "./navbar.style";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../store/user/user.selector";
import {selectIsCartOpen} from "../../store/cart/cart.selector";

const Navbar = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

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