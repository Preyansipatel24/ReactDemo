import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// this props use of parent to child data
const ExpenseItem = (props) => {

  return (
    //nested component card
    <Card className="expense-item">
      
      {/* same component in differnt file call  */}
      <ExpenseDate date={new Date(props.createdDate)} />
      <div className="expense-item__description">
      {/* <h2>{props.id}</h2> */}
        <h2>{props.costCenterMstName}</h2>
        <div className="expense-item__price">$ { props.amount}</div>
      </div>
    </Card>
  );
};
export default ExpenseItem;
