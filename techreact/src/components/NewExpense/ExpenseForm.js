import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => { 

  //usesatet get and set value
  const [enteredcostCenterMstName, setEnteredcostCenterMstName] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');


  //handler value as per changes
  const costCenterMstNameChangeHandler = (event) => {
    //updated value as per changes
    //event.target.value  use of text box value get
    setEnteredcostCenterMstName(event.target.value);
  };
  // const amountChangeHandler = (event) => {
  //   setEnteredAmount(event.target.value);
  // };
  // const dateChangeHandler = (event) => {
  //   setEnteredDate(event.target.value);
  // };


  const submitHandler = (event) => {
    //two-way binding
    event.preventDefault();
    const expenseData = {
      costCenterMstName: enteredcostCenterMstName,
      //amount: enteredAmount,
      //date: new Date(enteredDate)
    }
    console.log(expenseData);
    //Send Data to Parent Component newExpense.js function call 
    props.onSaveExpenseData(expenseData);

    setEnteredcostCenterMstName('');
    // setEnteredAmount('');
    // setEnteredDate('');
  };

  return (  
            <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                <label>costCenterMstName</label>
                <input
                    type="text"
                    value={enteredcostCenterMstName}
                    onChange={costCenterMstNameChangeHandler}
                />
                </div>
                {/* <div className="new-expense__control">
                <label>Amount</label>
                <input
                    type="number"
                    value={enteredAmount}
                    min="0.01"
                    step="0.01"
                    onChange={amountChangeHandler}
                />
                </div>
                <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} onChange={dateChangeHandler} />
                </div> */}
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
            </form>
  );
}

export default ExpenseForm;
