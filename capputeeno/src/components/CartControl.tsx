"use client"

import { useLocalStorage } from "@/hooks";
import { CartIcon } from "./svgs";
import { styled } from "styled-components";

const CartCount = styled.span`
    width: 17px;
    height: 17px;

    background-color: var(--delete-color);
    color: white;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    right: -8px;
    bottom: -8px;
    
    font-size: 10px;
    font-weight: 500;
`;

const Container = styled.div`
    position: relative;

    > div {
        width: 24px;
        height: 24px;
    }
`;

export const CartControl = () => {
    const { value } = useLocalStorage('cart-items', []);

    return(
        <Container>
            <div>
                <CartIcon/>
                {value.length && <CartCount>{value.length}</CartCount>}
            </div>
        </Container>
    );
}