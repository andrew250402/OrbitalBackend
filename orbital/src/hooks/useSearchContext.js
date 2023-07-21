import { SearchContext } from '../context/SearchedContext'
import { useContext } from 'react'

export const useSearchContext = () => {
    const context = useContext(SearchContext)

    if (!context) {
        throw Error('userSearchContext must be used inside an SearchContextProvider')
    }

    return context
}