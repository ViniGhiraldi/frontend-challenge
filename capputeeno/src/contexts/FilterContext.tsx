"use client"

import { FilterType, PriorityType } from "@/types";
import { createContext, useState } from "react";

export const FilterContext = createContext({
    search: '',
    page: 0,
    type: FilterType.ALL,
    priority: PriorityType.NEWS,
    setPriority: (value: PriorityType) => {},
    setSearch: (value: string) => {},
    setPage: (value: number) => {},
    setType: (value: FilterType) => {}
});

interface IFilterProvider{
    children?: React.ReactNode;
}

export const FilterProvider = ({children}: IFilterProvider) => {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [type, setType] = useState(FilterType.ALL);
    const [priority, setPriority] = useState(PriorityType.POPULARITY);

    return(
        <FilterContext.Provider value={{search, page, type, priority, setPriority, setSearch, setType, setPage}}>
            {children}
        </FilterContext.Provider>
    );
}