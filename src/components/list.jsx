import React from 'react'
import PlaceDetails from './PlaceDetails/PlaceDetails';



const List = ({places}) => {
 
  return (
    <div >
        {places?.map((place, i) => (
                <div item key={i} >
                    <PlaceDetails place = {place}/>
                </div>
            ))}
    </div>
)
}
export default List;
