import React from "react";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item ">
      <div className="expense-item__title">
        <h1>{props.date.toISOString()}</h1>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div>
          <span className="expense-item__price">${props.amount}</span>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
