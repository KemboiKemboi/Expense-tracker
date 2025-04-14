import React from "react";
import { useFormik } from "formik";
import "../App.css";

function ExpenseForm({ onAddExpense }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      amount: "",
    },
    onSubmit: (values, { resetForm }) => {
      if (!values.name || !values.amount) return;
      onAddExpense({
        id: Date.now(),
        name: values.name,
        amount: parseFloat(values.amount),
      });
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="expense-form">
      <input
        type="text"
        name="name"
        placeholder="Expense name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formik.values.amount}
        onChange={formik.handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default ExpenseForm;
