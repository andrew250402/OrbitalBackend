import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useNewReview = () => {
    const [error, setError] = useState (null)
    const [isLoading, setIsLoading] = useState(null)
    const { user } = useAuthContext()

    const newReview = async (module, grade, yearTaken, description, review) => {
        setIsLoading(true)
        setError(null)

        console.log({module, grade, yearTaken, description, review, _id: user.token})

        const response = await fetch('/api/review/add-review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify({
                module, 
                grade, 
                yearTaken, 
                description, 
                review,
                _id: user.token
            })
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
    }
    return {newReview, isLoading, error }
}