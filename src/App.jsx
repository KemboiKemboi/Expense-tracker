import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} />
    </div>
  );
}

export default App;
