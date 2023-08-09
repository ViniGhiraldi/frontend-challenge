"use client"

import { useFilter } from "@/hooks";
import { FilterType } from "@/types";
import { styled } from "styled-components";

const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
`;

interface IFilterItem{
    selected?: boolean;
}

const FilterItem = styled.li<IFilterItem>`
    font-weight: ${({selected}) => selected ? '600' : '400'};
    font-size: 16px;
    line-height: 22px;
    list-style: none;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;

    color: var(--text-dark);

    border-bottom: ${({selected}) => selected ? '4px solid var(--orange-low)' : ''};
`;

export const FilterByType = () => {
    const { type, setType } = useFilter();

    const handleChangeType = (value: FilterType) => {
        setType(value);
    }

    return(
        <FilterList>
            <FilterItem selected={type === FilterType.ALL} onClick={() => handleChangeType(FilterType.ALL)}>Todos os produtos</FilterItem>
            <FilterItem selected={type === FilterType.SHIRT} onClick={() => handleChangeType(FilterType.SHIRT)}>Camisetas</FilterItem>
            <FilterItem selected={type === FilterType.MUG} onClick={() => handleChangeType(FilterType.MUG)}>Canecas</FilterItem>
        </FilterList>
    );
}