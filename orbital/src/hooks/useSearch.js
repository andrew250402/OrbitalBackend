import { useState } from 'react'
import { useSearchContext } from './useSearchContext'

export const useSearch = () => {
    const [error, setError] = useState (null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useSearchContext()

    const search = async (search_value) => {
        if(localStorage.getItem('searchedNames')) {

            localStorage.removeItem('searchedNames')

            dispatch({type: 'SEARCH_OFF'})
        }
        setIsLoading(true)
        setError(null)

        const capSearchValue = search_value.toUpperCase()
        const response = await fetch('/api/info/search', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({search: capSearchValue})
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        } else {
            localStorage.setItem('searchedNames', JSON.stringify(json))
            dispatch({type: 'SEARCH_ON', payload: json})
        }
    }
    return {search , isLoading, error }
}
