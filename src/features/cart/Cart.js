import React, { useState } from 'react';
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
    z-index: 1;
    cursor: default;
    transition: 0.3s;
`;

const CartClose = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(50, 50, 50, 0.5);
    cursor: default;
`;

const CartElement = styled.div`
    display: block;
    padding: 10px;
`;

const NotifPing = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    position: absolute;
    bottom: 0px;
    left: 0px;
    background-color: red;
    color: white;
    border-radius: 10px;
    width: 20px;
    height: 20px;
    font-size: 10px;
    font-weight: bold;
    animation: Pop 0.3s;
`;

export function CartIcon() {
    const [open, setOpen] = useState(0);
    const carts = useSelector((state) => state.cart);

    return <>
        <CartIconDiv onClick={() => setOpen(1)}>
            {
                carts.value.length > 0 && <NotifPing>{ carts.value.length }</NotifPing>
            }
            <img alt="cart" src="/media/cart.svg" />
        </CartIconDiv>
        <Cart display={open}></Cart>
        {open ? <CartClose onClick={() => setOpen(0)} ></CartClose> : ""}
    </>
}

export function Cart({ display }) {
    const dispatch = useDispatch();
    const carts = useSelector((state) => state.cart);

    return <>
    <CartDiv display={display}>
        <h4>Your cart</h4>
        <hr></hr>
        {
            carts.value.map(elem => <CartElement onClick={() => dispatch(removeOne(elem.id))} key={elem.id}>
                {elem.title}
            </CartElement>)
        }
    </CartDiv>
    </>
}