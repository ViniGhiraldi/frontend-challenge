"use client"

import { styled } from "styled-components";
import { ArrowIcon } from "./svgs";
import { useState } from "react";
import { useFilter } from "@/hooks";
import { PriorityType } from "@/types";

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    button{
        border: none;
        background-color: transparent;
        cursor: pointer;
        font-family: inherit;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: var(--text-dark);

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }
`;

const PriorityFilter = styled.ul`
    position: absolute;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px 0px #0000001A;
    border-radius: 4px;
    list-style: none;
    padding: 12px 16px;
    z-index: 999;

    top: 100%;

    li{
        color: var(--text-dark);
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        white-space: nowrap;
        cursor: pointer;
    }

    li + li {
        margin-top: 4px;
    }
`;

export const FilterByPriority = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { setPriority } = useFilter();

    const handleOpen = () => setIsOpen(prev => !prev);

    const handleUpdatePriority = (value: PriorityType) => {
        setPriority(value);
        setIsOpen(false);
    }

    return(
        <FilterContainer>
            <button onClick={handleOpen}>
                Organizar por
                <ArrowIcon/>
            </button>
            {isOpen && 
                <PriorityFilter>
                    <li onClick={() => handleUpdatePriority(PriorityType.NEWS)}>Novidades</li>
                    <li onClick={() => handleUpdatePriority(PriorityType.BIGGEST_PRICE)}>Preço: Maior - menor</li>
                    <li onClick={() => handleUpdatePriority(PriorityType.MINOR_PRICE)}>Preço: Menor - maior</li>
                    <li onClick={() => handleUpdatePriority(PriorityType.POPULARITY)}>Mais vendidos</li>
                </PriorityFilter>
            }
        </FilterContainer>
    );
}