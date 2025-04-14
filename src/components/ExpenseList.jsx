import React from "react";
import "../App.css";

function ExpenseList({ expenses }) {
  return (
    <div className="expense-list">
      <h2>Recorded Expenses</h2>
      {expenses.length === 0 ? (
        <p>No expenses recorded yet.</p>
      ) : (
        expenses.map((expense) => (
          <div key={expense.id} className="expense-item">
            <p><strong>Description:</strong> {expense.description}</p>
            <p><strong>Category:</strong> {expense.category}</p>
            <p><strong>Date:</strong> {expense.date}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ExpenseList;
