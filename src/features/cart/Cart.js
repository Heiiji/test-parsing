import React from 'react';
import styled from 'styled-components';

export function Cart() {

    const CartDiv = styled.div`
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

    return <CartDiv>
        <img alt="cart" src="/media/cart.svg" />
    </CartDiv>
}