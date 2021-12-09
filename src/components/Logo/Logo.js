import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';
const logo = (props)=>(
<div className= {classes.Logo} style={{height: props.height}}>
    <img src={burgerLogo} alt="MyBurger"/>
</div>
);

export default logo;

//     style={{height: props.height}
//     this is one clever way of adjusting this, setting the height 
//     as a prperty where we simply pass the percentage height to the logo
//     component and in the componenet, assign it dynamically via inline styles.
//     nathing wrong with this approach, it should work fine. 