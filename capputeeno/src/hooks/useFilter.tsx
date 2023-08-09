import { FilterContext } from "@/contexts"
import { useContext } from "react"

export const useFilter = () => {
    return useContext(FilterContext);
}