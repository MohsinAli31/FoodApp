import React from 'react';
import { Box, Grid, Stack } from '@mui/material';
import { Card, CardContent, CardActions, CardMedia } from '@mui/material';
import { Badge, Button, Typography } from '@mui/material';
import MEALS from './data';
import Meal from './Meal';


const Meals = (props) => {
  return (
    <>
      <Typography  variant="h4" style={{fontWeight:'bold',textAlign:'center',margin:'20px 0'}}>
      Savor the excitement of doorstep-delivered food items in no time!
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Stack sx={{ margin: '20px' }} direction="row" gap={2} flexWrap="wrap" justifyContent={'center'} alignItems="center">
        {props.products.map((meal,key) => (
          
            <Meal key={meal.id} meal={meal} addToCart={props.addToCart} ></Meal>
          
        ))}
        </Stack>
      </Box>
    </>
  );
};

export default Meals;
