import { useEffect, useState } from 'react';
import styled from 'styled-components';
import List from '../components/list';
import Map from '../components/Map';

const HomeWrapper = styled.div`
    display: flex;
    div1{
        width: 370px
    }
`;
const Home = () => {
    const [places, setPlaces] = useState([])
    const [coordinates, setCoordinates] = useState({ lat:37.733795, lng:-122.446747});
    const [bounds, setBounds] = useState({});

    useEffect(() => {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=Hotels&latitude=37.786882&longitude=-122.399972&limit=50`, {
            headers: {
                Authorization: 'Bearer 4qYnQWEe5NDiKlIVY2bDZNwBqWbpyRrscNfGJga7Vo-UZiqWZNfsxs5iTT42jPMg6iTFGV4NYlM6tiwRddSMXh6nnsAyFXwg9SY0rz2uCI3jXE8pW9rYELiMCNhyYnYx'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.businesses);
                setPlaces(data.businesses)
            }
            )
            .catch((error) => console.log(error))
    }, [coordinates])

    return (
        <>
            <HomeWrapper container  >
                    <div1>
                        <List places={places} />
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
