import { useEffect, useState } from 'react';
import styled from 'styled-components';
import List from '../components/list';
import Map from '../components/Map';
import getLocation from '../Utils/Location';

const HomeWrapper = styled.div`
    display: flex;
    div1{
        width: 370px
    }
`;
const Home = () => {
    const [locations, setLocations] = useState("Jacksonville, FL");
    const [places, setPlaces] = useState([])
    const [coordinates, setCoordinates] = useState({ lat: 37.733795, lng: -122.446747 });
    const [bounds, setBounds] = useState({});

    const runSearch = () => {
        getLocation(locations)
        // .then((res) => res.json())
        .then((res) => {
            console.log(res.data)
            const lat = res.data[0].lat
            const lon = res.data[0].lon

            fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=Hotels&latitude=${lat}&longitude=${lon}&limit=50`, {
                headers: {
                    // Authorization: 'Bearer 4qYnQWEe5NDiKlIVY2bDZNwBqWbpyRrscNfGJga7Vo-UZiqWZNfsxs5iTT42jPMg6iTFGV4NYlM6tiwRddSMXh6nnsAyFXwg9SY0rz2uCI3jXE8pW9rYELiMCNhyYnYx'
                    Authorization: 'Bearer Giw6x54DDaoa5I262MoWaPw6u7Uq6CTImXlLWUP4MSPaZ3Z2GVqbolDIQfO0CHl2lbaYYsNMug_TlahZZ5HfoFoSl_D9PIaFYcqbRDnvmEfagBOSwS9G8FTFPi9rYnYx'
                }
            })
            .then((res)=>res.json())
            .then((hotels) =>setPlaces(hotels))
            // console.log(data.businesses);
            // setPlaces(data.businesses)
        }
        )
        .catch((error) => console.log(error))
    }
    useEffect(() => {
        runSearch()
        // fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=Hotels&latitude=37.786882&longitude=-122.399972&limit=50`, {
        //     headers: {
        //         Authorization: 'Bearer 4qYnQWEe5NDiKlIVY2bDZNwBqWbpyRrscNfGJga7Vo-UZiqWZNfsxs5iTT42jPMg6iTFGV4NYlM6tiwRddSMXh6nnsAyFXwg9SY0rz2uCI3jXE8pW9rYELiMCNhyYnYx'
        //     }
        // })
       
    }, [])

    return (
        <>
            <HomeWrapper container  >
                <div1>
                    <List places={places} locations={locations} setLocations={setLocations} />

                </div1>
                <div2 >
                    <Map
                        places={places}

                        setBounds={setBounds}
                        coordinates={coordinates}
                        setCoordinates={setCoordinates}
                    />
                </div2>
            </HomeWrapper>
        </>
    );
}

export default Home;
