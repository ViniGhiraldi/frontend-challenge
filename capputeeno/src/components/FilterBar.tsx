"use client"

import { styled } from "styled-components";
import { FilterByType } from "./FilterByType";
import { FilterByPriority } from "./FilterByPriority";

interface IFIlterBar {

}

const FilterContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: start;
    justify-content: space-between;
`;

export const FilterBar = ({}: IFIlterBar) => {
    return(
        <FilterContainer>
            <FilterByType/>
            <FilterByPriority/>
        </FilterContainer>
    );
}