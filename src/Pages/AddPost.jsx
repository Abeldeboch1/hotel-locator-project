// {selected  ?(
//     <InfoWindow 
//         position={{lat: parseFloat(selected.latitude,10), lng: parseFloat(selected.longitude,10)}} 
//         onCloseClick={()=>{setSelected(null);}}>
//         <div>
//             <div className='restName' onClick={() => onSelectRest(selected.location_id)}>
//                 <h2>{selected.name}</h2>
//             </div>
//             <p> Address:{selected.address_obj.street1} {selected.address_obj.city}, {selected.address_obj.state}</p>
//             <p> Phone Number: {selected.phone}</p>
//         </div>
//     </InfoWindow>
// ) : 
//     null
// }


// // onClick={() =>{
// //     setSelected(place);
// //   }}