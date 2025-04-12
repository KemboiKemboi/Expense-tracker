import React, { useState } from "react";
import '../App.css';

function ExpenseForm({ onAddExpense }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) return;
    onAddExpense({ name, amount: parseFloat(amount) });
    setName("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input
        type="text"
        placeholder="Expense name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default ExpenseForm;
