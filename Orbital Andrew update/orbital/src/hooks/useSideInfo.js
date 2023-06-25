import { useState, useEffect } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSideInfo = () => {
    const [error, setError] = useState (null)
    const [isPending, setIsPending] = useState(null)
    const [info, setInfo] = useState(null)
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
            const response = await fetch(`/api/info/${user.token}`);
            const json = await response.json();
    
            if (!response.ok) {
              setError(json.error);
            } else {
              setInfo(json);
            }
          } catch (error) {
            setError("An error occurred while fetching the data.");
          }
    
          setIsPending(false);
        };
    
        fetchInfo();
      }, [user]);
    
      return { info, isPending, error };
}