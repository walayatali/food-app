import React,{ useContext,useEffect, useState } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../Store/CartContext';

function HeaderCartButton(props)	{
	const cartCtx = useContext(CartContext);
	const { items } = cartCtx;
	const numberOfCartItems = items.reduce((curNumber, item) => {
	    return curNumber + item.amount;
	  }, 0);

	const [isAnimated, setIsAnimated] = useState(false);
	const btnClassesAll = `${classes.button} ${isAnimated ? classes.bump : ''}`;

	useEffect(()=> {
		if (items.length !== 0) {
			setIsAnimated(true);
		}
		const timer = setTimeout(()=> {
			setIsAnimated(false);
		},300)
		return () => {
			clearTimeout(timer);
		}
	}, [items])

	return (
		<React.Fragment>
			<button className={btnClassesAll} onClick={props.onShowCart}>
				<span className={classes.icon}><CartIcon/></span>
				<span >Your Cart</span>
				<span className={classes.badge}>{numberOfCartItems}</span>
			</button>
		
		</React.Fragment>
	)
}

export default HeaderCartButton;