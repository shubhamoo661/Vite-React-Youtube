import { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false)
    const [searchResult, setSearchResult] = useState([])
    const [selectCategories, setSelectCategories] = useState("New")
    const [mobileMenu, setMobileMenu] = useState(false)

    // This function show the selected category data dynamically with using of api. when you click any category of <leftNaveMenuItem.jsx> Component then it will show you that selected category videos.
    const fetchSelectedCategoryData = (query) => {
        setLoading(true)   // when  this method call so this loader value is true
        fetchDataFromApi(`search/?q=${query}`)
            .then(({ contents }) => {    // destructure the contents data
                setSearchResult(contents)
                setLoading(false)  // when data is loade successfuly the loader value become false
            })
    }
    useEffect(() => {
        fetchSelectedCategoryData(selectCategories)
    }, [selectCategories])

    return (
        <>
            <Context.Provider value={{
                loading,
                searchResult,
                selectCategories,
                mobileMenu,
                setLoading,
                setSearchResult,
                setSelectCategories,
                setMobileMenu
            }}>
                {props.children}
            </Context.Provider>
        </>
    )

}