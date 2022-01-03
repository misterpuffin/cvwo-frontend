import { GET_TAGS, NEW_TAGS, SET_FILTERS, CLEAR_FILTERS, SET_SEARCH } from "./filter.types"

const INITIAL_STATE = {
    tags: [],
    filters: [],
    search: ""
}

const filterReducer = (state = INITIAL_STATE, action: any) => {
    switch(action.type) {
        case GET_TAGS:
            return {
                ...state,
                tags: action.payload
            }
        case NEW_TAGS:
            const allTags = [...state.tags, ...action.payload]
            return {
                ...state,
                tags: allTags.filter((tag, index) => allTags.indexOf(tag) === index)
            }
        case SET_FILTERS:
            return {
                ...state,
                tags: action.payload
            }
        case CLEAR_FILTERS:
            return {
                ...state,
                filters: []
            }
        case SET_SEARCH:
            return {
                ...state,
                search: action.payload
            }
        default:
            return state
    }
}

export default filterReducer