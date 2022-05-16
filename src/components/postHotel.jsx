import React from 'react'
import styled from 'styled-components';
import { LocationOn, Phone } from "@material-ui/icons";
import { useNavigate } from 'react-router-dom';
const HotelWrapper = styled.header`
border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px orange;
  padding: 0.5rem;
  &hover {
    color: red;
  }
  .hotelList{
  font-family: cursive;
 margin:1px;
  }
  }
`;


const postHotel = ({ place }) => {
    const navigate = useNavigate();
  return (
     <HotelWrapper  onClick={() => navigate(`/posts/${id}`)}>
      <h3 classNameTitle='hotelList'> {place.name}</h3>  
      <p className='hotelList'> Rating <spam>{place.rating} </spam></p>
      <p className='hotelList'> <LocationOn /> <spam>{place.location.address1}  {place.location.city}  {place.location.country}  </spam></p>
      <p className='hotelList'> <Phone /> <spam>{place.display_phone} </spam><button onClick={() => { window.open(place.url, "_blank"); }}> Website </button> </p>
  
    </HotelWrapper>    
  )
};
export default postHotel;