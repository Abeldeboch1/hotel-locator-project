import React from 'react'
import styled from 'styled-components';
import { LocationOn, Phone } from "@material-ui/icons";
import GlobalStyle from '../../globalStyle';
const HeaderWrapper = styled.header`
  align-items: center;
  background-color: #fffdf2;
  border: 0.2px solid ${({ color }) => color || "black"};
  box-shadow: 10px 10px;
  padding: 1rem 1.5rem;
`;
const RatWrapper = styled.div`
  ul {
    display: flex;
    list-style-type: none;
  }
  li {
    padding-left: 1.5rem;
    &:first-child {
      padding-left: 0;
    }
  }
`;

const PlaceDetails = ({ place }) => {
  return (

    <HeaderWrapper>
      <h3 > {place.name}</h3>  
      {/* <RatWrapper>
        <ul>
          <li>
          Price
          </li>
          <li>
          {place.price}
          </li>
        </ul>
      </RatWrapper> */}
      <RatWrapper>
        <ul>
          <li>
            Rating
          </li>
          <li>
            {place.rating}
          </li>
        </ul>
      </RatWrapper>
      <RatWrapper>
        <ul>
          <li>
          <LocationOn /> 
          </li>
          <li>
          {place.location.address1}  {place.location.city}  {place.location.country}  Zip Code:{place.location.zip_code}
          </li>
        </ul>
      </RatWrapper>
      <RatWrapper>
        <ul>
          <li>
          <Phone /> 
          </li>
          <li>
          {place.display_phone}
          </li>
        </ul>
      </RatWrapper>   
    <button onClick={() => { window.open(place.url, "_blank"); }}> Website </button>  
    </HeaderWrapper>

  )
};
export default PlaceDetails;