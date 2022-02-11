import React,{ useContext} from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../Store/CartContext';

function MealItem(props)	{
	const cartCtx = useContext(CartContext);
	const price = `$${props.meal.price.toFixed(2)}`;
	const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.meal.id,
      name: props.meal.name,
      amount: amount,
      price: props.meal.price,
    });
  };
	return (
		<React.Fragment>
			<li key={props.meal.id} className={classes.meal}>
				<div>
					<h3>{props.meal.name}</h3>
					<div className={classes.description}>{props.meal.description}</div>
					<div className={classes.price}>{price}</div>
				</div>
				<div>
					<MealItemForm id={props.meal.id} onAddToCart={addToCartHandler}/>
				</div>
			</li>
		</React.Fragment>
	)
}

export default MealItem;