import {useState, useEffect} from 'react';
import Places from './Places.jsx';


export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePLaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(()=>{
    async function  getPlaces() {
      setIsFetching(true);
      const response = await fetch('http://localhost:3000/places')
      const resData = await response.json();
      setAvailablePLaces(resData.places);
      setIsFetching(false);
    }
    getPlaces();
  },[])

//Ugyan az mitn a felette lévő csak nem annyira modern
  // useEffect(()=>{
  //   //GET-nél nem kell második paraméter mert az a default
  //   fetch('http://localhost:3000/places')
  //   .then(response => response.json())
  //   .then(resData =>{
  //     setAvailablePLaces(resData.places);
  //   })
  // }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      isLoading={isFetching}
      loadingText = {"The data is loading..."}
      onSelectPlace={onSelectPlace}
    />
  );
}
