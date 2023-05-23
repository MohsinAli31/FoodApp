import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Stack } from '@mui/material';
import { Card, CardContent, CardActions, CardMedia } from '@mui/material';
import { Badge, Button, Typography } from '@mui/material';
import ProductDetailsPage from './ProductDetailsPage';

const Meal = ({ meal, addToCart }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product-details/${meal.id}`);
  };

  const addItems = () => {
    const item = {
      id: meal.id,
      name: meal.name,
      image: meal.image,
      price: meal.price,
      quantity: 1,
      totalPrice: meal.price,
    };
    addToCart(item);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: '200px' }} image={meal.image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {meal.name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {meal.description}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 'bold' }}>
          Rs:{meal.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={addItems}>
          Add to cart
        </Button>
        <Button size="small" onClick={handleClick}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Meal;
