import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { removeOne } from "../cart/cartSlice";

const CartIconDiv = styled.div`
position: fixed;
top: 0;
right: 0;
padding: 10px;
cursor: pointer;
background-color: rgba(250, 250, 250, 0.5);
border-radius: 0 0 0 10px;
    img {
        width: 30px;
        height: 30px;
    }
`;

const CartDiv = styled.div`
    position: fixed;
    top: 0;
    right: ${props => props.display ? 0 : "-300px"};
    width: 300px;
    height: 100%;
    background-color: white;
    box-shadow: 0 0 2px grey;
`;

export function CartIcon() {

    return <CartIconDiv>
        <img alt="cart" src="/media/cart.svg" />
        <Cart></Cart>
    </CartIconDiv>
}

export function Cart() {
    const dispatch = useDispatch();
    const carts = useSelector((state) => state.cart);

    return <CartDiv display={1}>
        <h4>Your cart</h4>
        <hr></hr>
        {
            carts.value.map(elem => <div onClick={() => dispatch(removeOne(elem.id))} key={elem.id}>
                {elem.title}
            </div>)
        }
    </CartDiv>
}