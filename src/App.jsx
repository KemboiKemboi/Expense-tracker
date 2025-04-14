import React, { useState } from "react";
import { useFormik } from "formik";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formik = useFormik({
    initialValues: {
      description: "",
      category: "",
      amount: "",
      date: "",
    },
    onSubmit: (values, { resetForm }) => {
      if (!values.description || !values.category || !values.amount || !values.date) return;
      handleAddExpense({
        id: Date.now(),
        ...values,
      });
      resetForm();
    },
  });

  return (
    <div className="app-container">
      <div className="left-panel">
        <h2>Enter your expense details below</h2>
        <form onSubmit={formik.handleSubmit} className="expense-form">
          <input
            type="text"
            name="description"
            placeholder="Expense description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formik.values.category}
            onChange={formik.handleChange}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formik.values.amount}
            onChange={formik.handleChange}
          />
          <input
            type="date"
            name="date"
            value={formik.values.date}
            onChange={formik.handleChange}
          />
          <button type="submit">Add Expense</button>
        </form>
      </div>

      <div className="right-panel">
        <h2>Expense List</h2>
        <input
          type="text"
          className="search-bar"
          placeholder="Search expenses"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {filteredExpenses.length > 0 && (
          <div className="expense-header">
            <span>Description</span>
            <span>Category</span>
            <span>Amount</span>
            <span>Date</span>
          </div>
        )}

        <div className="expense-list">
          {filteredExpenses.map((expense) => (
            <div key={expense.id} className="expense-row">
              <span>{expense.description}</span>
              <span>{expense.category}</span>
              <span>${parseFloat(expense.amount).toFixed(2)}</span>
              <span>{expense.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
