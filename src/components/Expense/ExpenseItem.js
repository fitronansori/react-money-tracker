import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="expense-item ">
      <ExpenseDate date={props.date} className="expense-item__date" />
      <div className="expense-item__title">
        <h2>{props.title}</h2>
        <div>
          <span className="expense-item__price">${props.amount}</span>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
