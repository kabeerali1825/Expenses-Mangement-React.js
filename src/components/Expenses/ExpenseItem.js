import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import { useState } from "react"; //react hooks must be call inside the REACT function like useState hook
//useState(props.title)-->this will able to call  the whole ExpenseItem Component Call Again when our State Changes.
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title); //useState(props.title)-->returns an ARRAY with Ecaxtly two Elements(2nd is sttaeUpdating Function)
  //let title = props.title;
  console.log("React Evaluation on ExpenseItm");
  const clickHandler = () => {
    //title = "UPDATED";
    setTitle("Updated xD!");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>xD</button>
    </Card>
  );
};

export default ExpenseItem;
