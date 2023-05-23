import React,{ useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import { Badge, Button, CardMedia, DialogActions, DialogContent, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import SearchIcon from '@mui/icons-material/Search';
import apple from './Assets/apple.png';
import grapes from './Assets/grapes.png';
import veg from './Assets/veg.png';
import CloseIcon from '@mui/icons-material/Close';
import { Card, CardContent, CardActions } from '@mui/material';
import CardItem from "./CartItem"
import Meals from "./Meals";

const Navbar = (props) => {
const [open, setOpen] = useState(false);
const [searchInput, setSearchInput] = useState("");


let TotalPrice=0;
props.cartItems.map((i)=>{
  TotalPrice=TotalPrice + i.totalPrice
})
const handleChange = (event)=>{
setSearchInput(event.target.value);
props.searchCart(event.target.value);
}

 function handleOpen(){
    setOpen(true);
  }
  function handleClose(){
    setOpen(false);
  }
  const navigate = useNavigate();
  return (
    <Box
        sx={{minHeight:'10vh',backgroundColor: '#3f98e8',}}>
      <Stack direction="row" alignItems="center" justifyContent='space-between'>
      <Link to="/meals" style={{ textDecoration: 'none' }}>
  <Typography variant="h4" style={{ padding: "10px", fontWeight: "bold" }}>
    YumHub
  </Typography>
</Link>
        <Box 
        // sx={{
        //   border: "2px solid black",
        //   padding: "10px",
        //   borderRadius: "25px",
        //   display: "flex",
        //   alignItems: "center"
        // }}
        >
          <SearchIcon sx={{marginTop:"5px"}}/>
          <input 
          // style={{border: "none", background: "transparent"}} 
          type="text" value={searchInput} onChange={handleChange}/>
        </Box>
        <Button sx={{padding:"10px", color:"#fff"}} onClick={handleOpen}>
          <Badge color='secondary' badgeContent={props.cartItems.length} marginRight="10px">
            <ShoppingCartIcon sx={{color:"#fff",fontSize:"40px"}} />
          </Badge>
        </Button>

      </Stack>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <Stack direction="row" justifyContent='space-between'>
          <DialogTitle><Typography variant="h6">Cart Section</Typography></DialogTitle>
            <DialogActions>
              
              <Button onClick={handleClose}><CloseIcon/></Button>
            </DialogActions>
         </Stack>
         <DialogContent>
            <Stack gap="2">
              {
                props.cartItems.map((item)=>{
                  return <CardItem key={item.id} addCartItems={props.addCartItems} removeFromCart={props.removeFromCart} item = {item}/>
                })
              }
              <Typography style={{color: "gray", fontWeight: "bold", fontSize: "15px",marginRight:'10px', marginTop: "20px", alignSelf: "flex-end", textAlign: "right"}}>Total Price: {TotalPrice}</Typography>

            </Stack>
            
         </DialogContent>
      </Dialog>
    </Box>
  )
}

export default Navbar