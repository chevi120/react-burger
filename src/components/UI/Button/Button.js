
import React from 'react';
import classes from './Button.module.css';



const button = (props) => (
    <button
        className={[classes.Button, classes[props.btnType]].join(' ')}
       onClick={props.clicked}>{props.children} </button>
);

export default button;

// The join() method creates and returns a new string
// by concatenating all of the elements in an array
// (or an array-like object), separated by commas or
//  a specified separator string.
// If the array has only one item, then that item will
//  be returned without using the separator.



//Specifies a string to separate each
//pair of adjacent elements of the array.
//The separator is converted to a string if
//necessary. If omitted, the array elements are separated
//with a comma (","). 
//If separator is an empty string, 
//all elements are joined without any characters in between them.