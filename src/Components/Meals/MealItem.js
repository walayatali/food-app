import React from 'react';
import classes from './MealItem.module.css';

function MealItem(props)	{
	return (
		<React.Fragment>
			<li key={props.meal.id} className={classes.meal}>
				<h3>{props.meal.name}</h3>
				<p className={classes.price}>{props.meal.price}</p>
				<p className={classes.description}>{props.meal.description}</p>
			</li>
		</React.Fragment>
	)
}

export default MealItem;