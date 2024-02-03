import  { useState, useEffect } from "react";

export function useFetch(fetchFn, initalValue) {
    const [fetchedData, setFetchedData] = useState(initalValue);
    const [isFetching, setIsFetching] = useState();
    const [error, setError] = useState();
  
    useEffect(() =>{
      async function fetchPlaces() {
        setIsFetching(true);
        try {
          const data = await fetchFn();
          setFetchedData(data);
        } catch (error) {
          setError({
            message: error.message || "Failed to fetch data."
          })
        }
        setIsFetching(false);
      }
  
      fetchPlaces();
    }, [fetchFn]);

    return {
      isFetching,
      fetchedData,
      error,
      setFetchedData
    }
};