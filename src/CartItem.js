import React, { useState } from 'react';
import {
	IconButton,
	Card,
	CardContent,
	CardMedia,
	CardActions,
	Typography,
	Box,
} from '@mui/material';
import { Stack } from '@mui/system';
import { Add, Remove } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const CartItem = ({ item,addCartItems ,removeFromCart}) => {
	const [quantity, setQuantity] = useState(item.quantity);
	const handleIncrement = () => {
		addCartItems(item);
		
	};

	const handleDecrement = () => {
		if (quantity > 0) {
			
			removeFromCart(item)
		}
	};
	return (
		<Card sx={{ width: { xs: 280, sm: 550 } }}>
			<Stack direction="row">
				<CardMedia
					sx={{ width: '100px', height: '100px' }}
					image={item.image}
				></CardMedia>
				<CardContent sx={{ width: { xs: 200, sm: 500 } }}>
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
					>
						<Typography
							style={{
								fontWeight: 'bold',
								fontSize: { width: { xs: '10px', sm: '20px' } },
							}}
						>
							{item.name}
						</Typography>
						<Box display="flex" alignItems="center">
							<IconButton onClick={handleIncrement}>
								<AddIcon   style={{
									backgroundColor: 'hsla(240,7%,62%,1)',
									// padding: '5px',
									borderRadius: '20px',
								}}/>
							</IconButton>
							<Typography
								style={{
									backgroundColor: 'hsla(39,100%,68%,1)',
									padding: '5px',
									borderRadius: '20px',
								}}
							>
								Quantity: {item.quantity}
							</Typography>
							<IconButton  onClick={handleDecrement}>
								<RemoveIcon  style={{
									backgroundColor: 'hsla(240,7%,62%,1)',
									// padding: '5px',
									borderRadius: '20px',
								}}/>
							</IconButton>
						</Box>
						<Typography
							style={{ color: '#24c148', fontWeight: 'bold', fontSize: '15px' }}
						>
							Rs. {item.totalPrice}
						</Typography>
					</Stack>
				</CardContent>
			</Stack>
		</Card>
	);
};

export default CartItem;
