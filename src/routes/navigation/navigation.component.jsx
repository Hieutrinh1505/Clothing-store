import { Outlet,Link } from "react-router-dom";
import { Fragment, useContext } from 'react';
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import { selectCurrentUser } from "../../store/user/user.selector";

import { NavigationContainer, NavLink, NavLinks, LogoContainer } from "./navigation.styles";
import { useSelector } from "react-redux";
const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const {isCartOpen} = useContext(CartContext);
    // console.log(currentUser);
    return (
      <Fragment>
        <NavigationContainer>
          <LogoContainer  to='/'>
                <CrwnLogo className="logo"/>
          </LogoContainer>
            <NavLinks>
                <NavLink to='/shop'>
                    Shop
                </NavLink>
                {currentUser ? (
                    <NavLink as='span' onClick={signOutUser}>
                    {' '}
                    SIGN OUT{' '}
                    </NavLink>
                ):
                (
                    <NavLink to='/auth'>
                        SIGN IN
                    </NavLink>
                )}   
                <CartIcon/>
            </NavLinks>
            {isCartOpen && <CartDropDown/>}
        </NavigationContainer>
        <Outlet/>
    </Fragment>
    )
};
export default Navigation