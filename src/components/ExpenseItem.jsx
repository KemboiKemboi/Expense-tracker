import React from "react";
import '../App.css';

function ExpenseItem({ expense, onDelete }) {
  return (
    <li className="expense-item">
      <span>{expense.name} - ${expense.amount.toFixed(2)}</span>
      <button className="delete-btn" onClick={() => onDelete(expense.id)}>
        🗑
      </button>
    </li>
  );
}

export default ExpenseItem;
