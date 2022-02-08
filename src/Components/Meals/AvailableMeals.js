import React from 'react';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem';
import DummyMeals from './DummyMeals';

function AvailableMeals(props)	{
	return (
		<React.Fragment>
			<div className={classes.meals}>
			{
				DummyMeals.map((meal) =>  
					<MealItem key={meal.id} meal={meal}/>
				)
			}
			</div>
		</React.Fragment>
	)
}

export default AvailableMeals;