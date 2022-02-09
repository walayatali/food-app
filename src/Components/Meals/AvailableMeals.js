import React from 'react';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem';
import DummyMeals from './DummyMeals';
import Card from '../UI/Card';

function AvailableMeals(props)	{
	return (
		<React.Fragment>
			<section className={classes.meals}>
				<Card>
					<ul>
						{
							DummyMeals.map((meal) =>  
								<MealItem key={meal.id} meal={meal}/>
							)
						}
					</ul>
				</Card>
			</section>
		</React.Fragment>
	)
}

export default AvailableMeals;