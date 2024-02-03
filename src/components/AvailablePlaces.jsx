import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { fetchAvailablePlaces } from '../http.js'
import { sortPlacesByDistance } from "../loc.js";
import { useFetch } from "../hooks/useFetch.js";

async function fetchSortedPlaces(){
  const places = await fetchAvailablePlaces();

  // converting callback func into the promise func
  return new Promise((resolve)=>{
  navigator.geolocation.getCurrentPosition((position) =>{
        const sortedPlaces = sortPlacesByDistance(
          places,
          position.coords.latitude,
          position.coords.longitude
        )
        resolve(sortedPlaces);
      })
  });
}

export default function AvailablePlaces({ onSelectPlace }) {
  const { isFetching, error, fetchedData: availablePlaces } = useFetch(fetchSortedPlaces,[]);

  if(error){
    return <Error title="An error occurred!" message={error.message} />
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
