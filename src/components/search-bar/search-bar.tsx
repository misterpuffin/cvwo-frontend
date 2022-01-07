import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { setSearch } from "../../redux/filter/filter.actions"
import { RootState } from "../../redux/root-reducer"

import { AiOutlineSearch } from "react-icons/ai"
import styles from "./search-bar.module.scss"

const SearchBar = () => {
    const dispatch = useDispatch()
    const searchString = useSelector((state: RootState) => state.filters.search)
    const handleChange = (event:any) => {
        dispatch(setSearch(event.target.value))
    }
    
    return (
    <div className={styles.searchBar}>
        <AiOutlineSearch className={styles.searchBarIcon}/>
        <input 
            className={styles.searchBarInput}
            type="text"
            name="search"
            value={searchString}
            placeholder={"Enter a name to match"}
            onChange={handleChange}
        />
    </div>)
}

export default SearchBar