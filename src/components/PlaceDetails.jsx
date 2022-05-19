import React from 'react'
import styled, {css} from 'styled-components';
import { LocationOn, Phone } from "@material-ui/icons";
import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import  {lighten}  from '../Utils/styleMethods';
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
  .hotelListwebsite{
    color:green;
    // padding-left:200px;

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
  ${props => props.isSelected && css`
  background-color: #85cdd2`}
`;

const PlaceDetails = ({ place}) => {
  console.log(place)
  // const { id } = useParams();
  const navigate = useNavigate();
  const displayHotel = (e) => {
    navigate(`/HotelDetail/${place.id}`);
  }
  return (
     <HotelWrapper  onClick={displayHotel}>
      <h3 className='classNameTitle'> {place.name}</h3>  
      <p className='hotelList'> Rating <spam>{place.rating} </spam></p>
      <p className='hotelList'> <LocationOn /> <spam>{place.location.address1}  {place.location.city}  {place.location.country}  </spam></p>
      <p className='hotelList'> <Phone /> <spam>{place.display_phone} </spam>
       <spam className='hotelListwebsite' onClick={() => { window.open(place.url, "_blank"); }}> <button>website</button> </spam> </p>

  
    </HotelWrapper>    
  )
};
export default PlaceDetails;