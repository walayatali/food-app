import React,{ useContext } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../Store/CartContext';

function HeaderCartButton(props)	{
	const cartCtx = useContext(CartContext);
	
	const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
	    return curNumber + item.amount;
	  }, 0);

	return (
		<React.Fragment>
			<button className={classes.button} onClick={props.onShowCart}>
				<span className={classes.icon}><CartIcon/></span>
				<span >Your Cart</span>
				<span className={classes.badge}>{numberOfCartItems}</span>
			</button>
		
		</React.Fragment>
	)
}

export default HeaderCartButton;