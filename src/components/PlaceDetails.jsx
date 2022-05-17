import React from 'react'
import styled from 'styled-components';
import { LocationOn, Phone } from "@material-ui/icons";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {lighten} from '../Utils/styleMethods';
const HotelWrapper = styled.header`
border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px orange;
  padding: 0.5rem;
  &:hover {
    ${lighten('#009900', 0.8)}
    cursor: pointer;
    p {
      color: #000099;
    }
  }
  .hotelList{
  font-family: cursive;
 margin:1px;
  }
  .classNameTitle{
  font-family: cursive;
 color:#ff4500;

 margin:1px;
  }
  }
`;


const PlaceDetails = ({ place }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const displayHotel = (e) => {
    navigate(`/postHotel/${parseInt(id)}`);
  }
  return (
     <HotelWrapper  onClick={displayHotel}>
      <h3 className='classNameTitle'> {place.name}</h3>
      <img src={place.photo?.images.large.url} alt='Picture for Hotels Not Available'/>
      
      <p className='hotelList'> Rating <spam>{place.rating} </spam></p>
      <p className='hotelList'> <LocationOn /> <spam>{place.location.address1}  {place.location.city}  {place.location.country}
      </spam></p>
      <p className='hotelList'> <Phone /> <spam>{place.display_phone} </spam><button onClick={() => { window.open(place.url, "_blank"); }}> Website </button> </p>
  
    </HotelWrapper>    
  )
};
export default PlaceDetails;