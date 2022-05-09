import React from 'react'
import { useEffect, useState } from 'react';
import List from '../components/List';
import Map from '../components/Map';
import styled from 'styled-components';
function MapList() {

    const [places, setPlaces] = useState([])
    const [coordinates, setCoordinates] = useState({ lat: -3.745, lng: -38.523 });
    const [bounds, setBounds] = useState({});


    useEffect(() => {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=Hotels&latitude=37.786882&longitude=-122.399972&limit=50`, {
            headers: {
                Authorization: 'Bearer 4qYnQWEe5NDiKlIVY2bDZNwBqWbpyRrscNfGJga7Vo-UZiqWZNfsxs5iTT42jPMg6iTFGV4NYlM6tiwRddSMXh6nnsAyFXwg9SY0rz2uCI3jXE8pW9rYELiMCNhyYnYx'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                console.log(data.businesses[0].id)
                console.log(data.businesses[0].name);
                console.log(data.region.center.longitude);
                // setPlaces(data)
                setPlaces(data.businesses)
            }
            )
            .catch((error) => console.log(error))
    }, [])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                setCoordinates({
                    lat: latitude,
                    lng: longitude,
                });
            }
        );
    }, []);




    const MapLisst = styled.div`
  display: flex;
  padding: 6px;
  margin: 6px;
  Map{
       margin-right: 5px;
  }
`;
    return (
        <>
            <MapLisst>
               
                <div >
                    <Map
                        setBounds={setBounds}
                        coordinates={coordinates}
                        setCoordinates={setCoordinates}
                    />
                </div>
                 <div >
                    <List places={places} />
                </div>
            </MapLisst>
        </>
    )
}
export default MapList;