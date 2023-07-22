import { createContext, useReducer, useEffect } from 'react'

export const SearchContext = createContext()

export const searchReducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_ON':
            return { searchedNames: action.payload }
        case 'SEARCH_OFF':
            return { searchedNames: null }
        default:
            return state
    }
}

export const SearchContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(searchReducer, {
        searchedNames: null
    })

    useEffect(() => {
        const searchedNames = JSON.parse(localStorage.getItem('searchedNames'))

        if (searchedNames) {
            dispatch({ type: 'SEARCH_ON', payload: searchedNames})
        }

    }, [])

    console.log('SearchContext state: ', state)

    return (
        <SearchContext.Provider value={{...state, dispatch}}>
            { children }
        </SearchContext.Provider>
    )
}