import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { id: Date.now(), ...expense }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
}

export default App;
