import React from "react";

import "./Expense.css";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {
        //props pass parent class bind data and map fun use of each item bind
        props.item.map((expense) => (
          <ExpenseItem
            key={expense.id}
            createdDate={expense.createdDate}
            costCenterMstName={expense.costCenterMstName}
            amount={Math.floor(Math.random() * 90 + 10) + "".toString()}
          />
        ))
      }
    </Card>
  );
};

export default Expenses;
