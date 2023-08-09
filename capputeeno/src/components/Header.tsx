"use client"

import { Saira_Stencil_One } from "next/font/google";
import { styled } from "styled-components";
import { PrimaryInputWSearchIcon } from "./PrimaryInput";
import { CartControl } from "./CartControl";
import { useFilter } from "@/hooks";

const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin']
})

interface IHeader{

}

const CHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }
`;

const CLogo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
`;

export const Header = ({}: IHeader) => {
    const { search, setSearch } = useFilter();
    return(
        <CHeader>
            <CLogo className={sairaStencil.className}>capputeeno</CLogo>
            <div>
                <PrimaryInputWSearchIcon 
                    placeholder="Procurando por algo específico?"
                    value={search}
                    handleChange={setSearch}
                />
                <CartControl/>
            </div>
        </CHeader>
    );
}