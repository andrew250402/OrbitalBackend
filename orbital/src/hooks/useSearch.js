import { useState } from 'react'

export const useSearch = () => {
    const [error, setError] = useState (null)
    const [isLoading, setIsLoading] = useState(null)

    const search = async (search_value) => {
        setIsLoading(true)
        setError(null)
        const response = await fetch('/api/info/search', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({search: search_value})
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        } else {
            return json
        }
    }
    return {search , isLoading, error }
}
