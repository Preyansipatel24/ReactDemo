import React from 'react';
import './Card.css'

const Card = (props) =>
 {
  //same css use for all common component 
  //parent and child class both class css apply
   const classes = "card " + props.className;
   //props.children use of all get child code 
   //whenever you are write this component  this method to get all child code. 
   return <div className={classes}>{props.children}</div>;
 }
export default Card;