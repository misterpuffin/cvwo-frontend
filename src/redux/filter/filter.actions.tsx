import { GET_TAGS, CLEAR_FILTERS, SET_FILTERS, NEW_TAGS, SET_SEARCH } from "./filter.types";


export const getTags = (tags: string[]) => ({
    type: GET_TAGS,
    payload: tags
})

export const newTags = (tags: string[]) => ({
    type: NEW_TAGS,
    payload: tags
})

export const setFilters = (filters: string[]) => ({
    type: SET_FILTERS,
    payload: filters
})

export const clearFilters = () => ({
    type: CLEAR_FILTERS
})

export const setSearch = (search_string: string) => ({
    type: SET_SEARCH,
    payload: search_string
})