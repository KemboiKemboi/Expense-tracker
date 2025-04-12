import React from "react";
import ExpenseItem from "./ExpenseItem";
import '../App.css';

function ExpenseList({ expenses, onDelete }) {
  return (
    <ul className="expense-list">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default ExpenseList;
