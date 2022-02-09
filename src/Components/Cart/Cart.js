import React from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';

function Cart(props)	{
	const cartItems = <ul className={classes['cart-items']}>
						{[{id: "c1_", "name": "Sushi", "description": "This is Sushi", "price": "129.00$", }].map((item) => (
							<li key="cs">{item.name}</li>
							))}
					  </ul>;
  	const closeModalHandler = () => {
  		
  	}

	return (
		<Modal>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>234$</span>
			</div>
			<div className={classes.actions}>
				<button onClick={closeModalHandler} className={classes['button--alt']}>Close</button>
				<button className={classes.button}>Order</button>
			</div>
		</Modal>
	)
}

export default Cart;