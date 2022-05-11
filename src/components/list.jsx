import React from 'react'
import PlaceDetails from './PlaceDetails';
import styled from 'styled-components';


const ListWrapper = styled.div`
height: '75vh',
overflow: 'auto',
`;


const List = ({places}) => {
 
  return (
    <ListWrapper >
        {places?.map((place, i) => (
                <div item key={i} >
                  <PlaceDetails place = {place}/>            
                </div>
            ))}
    </ListWrapper>
)
}
export default List;
