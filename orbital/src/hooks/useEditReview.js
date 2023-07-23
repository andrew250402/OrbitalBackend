import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useReviewsContext } from './useReviewsContext'

export const useEditReview = () => {
    const [error, setError] = useState (null)
    const [isLoading, setIsLoading] = useState(null)
    const { user } = useAuthContext()
    const { dispatch } = useReviewsContext()

    const editReview = async (review_id, module, grade, yearTaken, description, review) => {
        setIsLoading(true)
        setError(null)

        //to make new api for put
        const response = await fetch(`/api/review/${review_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify({
                module, 
                grade, 
                yearTaken, 
                description, 
                review
            })
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        //to make a new dispatch case
        dispatch({type: 'DELETE_REVIEW', payload: json})
        dispatch({type: 'CREATE_REVIEW', payload: json})
    }
    return {editReview, isLoading, error }
}