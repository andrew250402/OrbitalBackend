import { useState, useEffect } from 'react'
import { useAuthContext } from './useAuthContext'
import { useReviewsContext } from './useReviewsContext'

export const useReview = () => {
    const [error, setError] = useState (null)
    const [isPending, setIsPending] = useState(null)
    const {reviews, dispatch} = useReviewsContext()
    const { user } = useAuthContext()

    useEffect(() => {
        const fetchInfo = async () => {
          setIsPending(true);
          setError(null);
    
          if (!user) {
            setError("There is no user here");
            setIsPending(false);
            return;
          }
    
          try {
            const response = await fetch('/api/review', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const json = await response.json();
    
            if (!response.ok) {
              setError(json.error);
            } else {
              dispatch({type: 'SET_REVIEWS', payload: json});
            }
          } catch (error) {
            setError("An error occurred while fetching the data.");
          }
    
          setIsPending(false);
        };
    
        fetchInfo();
      }, [user, dispatch]);
    
      return { reviews, isPending, error };
}