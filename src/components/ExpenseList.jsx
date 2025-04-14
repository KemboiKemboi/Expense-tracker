import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "../App.css";

function ExpenseList({ expenses, onDelete }) {
  const [filterText, setFilterText] = useState("");

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="expense-list-container">
      <input
        type="text"
        placeholder="Search expenses"
        className="search-bar"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="expense-list">
        {filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
