import React from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import MEALS from './data';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  image: {
    width: '300px',
    marginBottom: theme.spacing(2),
  },
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  description: {
    marginBottom: theme.spacing(2),
  },
  price: {
    marginBottom: theme.spacing(2),
  },
  button: {
    alignSelf: 'flex-end',
  },
}));

const ProductDetailsPage = () => {
  const { id } = useParams();
  const presemntItem = MEALS.find((c)=>c.id == id)
  console.log("presemntItem",presemntItem)
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img
        src={presemntItem.image}
        alt={presemntItem.name}
        className={classes.image}
      />
      <Typography variant="h6" className={classes.title}>
        {presemntItem.name}
      </Typography>
      <Typography variant="body1" className={classes.description}>
       {presemntItem.description}
      </Typography>
      <Typography variant="body2" className={classes.price}>
        {presemntItem.price}
      </Typography>
      {/* <Button variant="contained" color="primary" className={classes.button}>
        Add to Cart
      </Button> */}
    </div>
  );
};

export default ProductDetailsPage;
