import MealItem from './Meal-item';
import classes from './Meals.module.css';
export default function Meals({meals}){

    return <ul className={classes.meals}>
        {meals.map((meal)=>(
            <li  key={meal.id}><MealItem {...meal}/></li>
        ))}
    </ul>
}