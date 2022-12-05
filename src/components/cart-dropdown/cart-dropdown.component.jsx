import { CartDropDownContainer, EmptyMessage,CartItems } from './cart-dropdown.styles'
import { CartContext } from '../../contexts/cart.context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import CartItem from '../cart-item/cart-item.component'
import Button from '../button/button.component'
const CartDropDown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    };
    return (
        <CartDropDownContainer>
            <CartItems>
            {cartItems.length ? (
                cartItems.map((item) => <CartItem key={item.id} cartItem={item}/>)
            ): (
                <EmptyMessage>Your cart is empty</EmptyMessage>
            ) 
            }
            </CartItems>
            <Button onClick={goToCheckoutHandler} >GO TO CHECKOUT</Button>
        </CartDropDownContainer>
    );
};

export default CartDropDown