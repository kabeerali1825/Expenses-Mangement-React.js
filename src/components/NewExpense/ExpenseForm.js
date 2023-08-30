import "./ExpenseForm.css";
import React, { useState } from "react";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  /* const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredDate: "",
    enteredAmount: "",
  });*/
  /*setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
    console.log(event.target.value);
  };
   setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });*/
  const titleChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredTitle(event.target.value); //you can see on console.log(event)
  };

  const AmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value); //you can see on console.log(event)
    /* setUserInput({
      ...userInput,
      // enteredTitle: "",
      //enteredDate: "",
      enteredAmount: event.target.value,
    });
    //BEST METHOD-----REACT WILL GURANTEE
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
    console.log(event.target.value);
*/
  };
  //When Ever You Update a State That Depends on The previois State setUserInput({...userInput,enteredDate: event.target.value,)} -->DONT DO THIS
  const DateChangeHandler = (event) => {
    console.log(event.target.value);

    setEnteredDate(event.target.value);
    //console.log(event.target.value); //you can see on console.log(event)
    /*setUserInput({
      ...userInput, //Older State Copy hERE
      enteredDate: event.target.value,
    });
     setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
    console.log(event.target.value);*/
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    //console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    //TWO WAY BINDINF-CONCEPT
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={AmountChangeHandler}
            value={enteredAmount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={DateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
