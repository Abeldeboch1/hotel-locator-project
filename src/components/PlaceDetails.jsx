import React from 'react'
import styled from 'styled-components';
import { LocationOn, Phone } from "@material-ui/icons";
import {CardMedia} from "@material-ui/core";
const HeaderWrapper = styled.header`
  align-items: center;
  background-color: #fffdf2;
  border: 0.2px solid ${({ color }) => color || "black"};
  padding: 1rem 1.5rem;
`;
const RatWrapper = styled.div`
  ul {
    display: flex;
    list-style-type: none;
  }
  li {
     padding-top: 2px;
    padding-left: 1.5rem;
    &:first-child {
      padding-left: 0;
    }
  }
`;

const PlaceDetails = ({ place }) => {
  return (

    <HeaderWrapper>
        <CardMedia
            style={{height: 200}}
            title={place.name}
            image={place.image ? place.image.large.url : "noImage"}
        />
      <h3 > {place.name}</h3>  
      <RatWrapper>
        <ul>
          <li> Rating </li>
          <li>{place.rating} </li>
        </ul>
      </RatWrapper>
      <RatWrapper>
        <ul>
          <li> <LocationOn /> </li>
          <li>{place.location.address1}  {place.location.city}  {place.location.country}  Zip Code:{place.location.zip_code}</li>
        </ul>
      </RatWrapper>
      <RatWrapper>
        <ul>
          <li> <Phone /> </li>
          <li>{place.display_phone}</li>
        </ul>
      </RatWrapper>   
    <button onClick={() => { window.open(place.url, "_blank"); }}> Website </button>  
    </HeaderWrapper>
  )
};
export default PlaceDetails;