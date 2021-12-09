import React, {Component} from 'react';
import propTypes from 'prop-types';
//is a library that helps in minimizing this problem
//in React by checking the types passed in the props
//object against a specification we set beforehand
//and to raise a warning if the types passed don't
//match the types expected.
import classes from './BurgerIngredient.module.css';

class BurgerIngredient extends Component{
    render(){
        let ingredient = null;

    switch (this.props.type) {
        case ('bread-botton'):
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>

                </div>

            );
            break;
        case ('meat'):
            ingredient = <div className={classes.Meat}></div>;
            break;
        case ('cheese'):
            ingredient = <div className={classes.Cheese}></div>;
            break;
        case ('bacon'):
            ingredient = <div className={classes.Bacon}></div>;
            break;
        case ('salad'):
            ingredient = <div className={classes.Salad}></div>;
            break;
        default:
            ingredient=null;
    }
    return ingredient;

    }
} 

BurgerIngredient.propTypes={
    type: propTypes.string.isRequired
}
export default BurgerIngredient;