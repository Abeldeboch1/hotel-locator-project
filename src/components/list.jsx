import React from 'react'
import PlaceDetails from './PlaceDetails/PlaceDetails';
// import { useState } from 'react';
import {Grid } from '@material-ui/core';
import { useStyles } from '../Utils/globalStyle';

const List = () => {

  const places = [
    {name: "List1 "},
    {name: "List2 "},
    {name: "List3 "},
    {name: "List4 "},
    {name: "List5 "},
    {name: "List"},
    {name: "List4 "},
]
  const classes = useStyles();
    // const [type, setType] = useState('restaurants');
  return (
    <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
                <Grid item key={i} xs={12} >
                    <PlaceDetails place = {place}/>
                </Grid>
            ))}
    </Grid>
)
}
export default List;
