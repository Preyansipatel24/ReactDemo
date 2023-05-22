import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    //clickeventhandler
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            //copy all data
            //spread Function
            ...enteredExpenseData,
            //id:Math.random().toString()
        }
        console.log(expenseData);
         
        // child data set in parent app.js
      props.onAddExpense(expenseData);
    };
    return(  
            <div className="new-expense">
                <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler}/> 
            </div>
    );
}
export default NewExpense;