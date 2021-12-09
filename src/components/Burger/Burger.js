import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props)=> {
    let transFormedIngredients= Object.keys(props.ingredients)
    .map(igKey=>{
        return [...Array(props.ingredients[igKey])].map((_, i)=>{
             return <BurgerIngredient key = {igKey + i} type ={igKey} />;
        });
    })
    .reduce((arr,el)=>{
        return arr.concat(el)//The concat() method is used to join two or more strings.
                              //This method does not change the existing strings,
                              // but returns a new string containing the text of the joined strings.
    }, []);
    if(transFormedIngredients.length === 0){
        transFormedIngredients= <p>Plase stat adding ingredients!</p>
    }
    console.log(transFormedIngredients);// method writes a message to the console.
    return (
    <div className= {classes.Burger}>
         <BurgerIngredient type="bread-top"/>
         {transFormedIngredients}
         <BurgerIngredient type="bread-botton"/>
         
         


        
    </div>

    );
};
export default burger;