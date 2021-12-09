import React, { Component } from 'react';
import Auxx from '../../hoc/Auxx/Auxx';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummarry';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

//When creating a React component,
//the component's name must start with an upper case letter.
//The component has to include the extends
//React.Component statement, this statement
//creates an inheritance to React.Component,
//and gives your component access to React.
//Component's functions.
//The component also requires a render()
//method, this method returns HTML.
class BurgerBuilder extends Component {
    // constructor (props){
    //     super(props);
    //     this.state= {...}
    // }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState(ingredients) {
        //Object.keys() method is used to return an array
        //whose elements are strings corresponding
        //to the enumerable properties found directly
        //upon an object. The ordering of the properties 
        //is the same as that given by the object manually
        //in a loop is applied to the properties.
        //Object.keys() takes the object as an argument of which
        //the enumerable own properties are to be returned and
        //returns an array of strings that represent all the enumerable
        //properties of the given object.
        const sum = Object.keys(ingredients)
            // .map() This method transforms an array by applying 
            // a function to all of its elements, and then
            //  building a new array from the returned values.
            .map(igKey => {
                return ingredients[igKey];
            })
            // reduce()This method executes a provided function
            //  for each value of the array (from left to right).
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ purchasable: sum > 0 });
    }


    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCount;
        const priceAddititon = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddititon;
        //To change a value in the state object,
        //use the this.setState() method.
        //When a value in the state object changes,
        //the component will re-render, meaning that the
        //output will change according to the new value(s).
        this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
        this.updatePurchaseState(updateIngredients);
    }
    removeIngredientHadler = (type) => {
        //(This.state) The state object is where you store
        //property values that belongs to the component.
        //When the state object changes,
        //the component re-renders.
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;

        }
        const updatedCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
        this.updatePurchaseState(updateIngredients);


    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        alert('You Continue');
    }
    render() {
        //As I have talked earlier, render()
        //is the most used method for any React
        //powered component which returns a JSX with
        //backend data. It is seen as a normal function 
        //but render() function has to return something 
        //whether it is null. When the component file is
        //called it calls the render() method by default
        //because that component needs to display the HTML
        //markup or we can say JSX syntax.
        const disableInfo = {
            ...this.state.ingredients

        };
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0

        }
        return (
            <Auxx>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingrediantRemoved={this.removeIngredientHadler}
                    disabled={disableInfo}
                    purchasables={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice} />

            </Auxx>
        );
    }
}
export default BurgerBuilder;