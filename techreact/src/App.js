import React, { useState, useEffect } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expense from "./components/Expenses/Expense";
//import { BrowserRouter } from 'react-router-dom';

// arrray List
let DUMMY_EXPENSE = [
  // Arrayofobject
];
//arrayfunction: allow you to access and manipulate arrays. Simple and multi-dimensional arrays are supported.
const App = () => {

      //don't call api repeatedly use of useeffect
      useEffect(() => {
        fetchdata();
      }, []); //[] use of what is next fun call but i don't call any fun so i will show blank []



    function fetchdata(){
      //get data api
      fetch("http://192.168.1.122:1289/api/CostCenter/GetAllCostCenterAsync", {
        method: "POST",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          //console.log(data.data);
          setExpenses(data.data);
        });
    }


  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  //Send Data to Parent Component
  const addExpeseHandler = (expense) => {
      //Add Data Api
          fetch('http://192.168.1.122:1289/api/CostCenter/AddCostCenterAsync', {
            method: 'POST',
            body: JSON.stringify(expense),
            headers: {
                'content-Type' : 'application/json'
            }
        }).then(
            response => {
              fetchdata();
            }
        );
    
  };

  return (
    <div>
      {/* Send Data to Parent Component */}
      <NewExpense onAddExpense={addExpeseHandler} />
      <Expense item={expenses} />
    </div>
  );
};

export default App;
