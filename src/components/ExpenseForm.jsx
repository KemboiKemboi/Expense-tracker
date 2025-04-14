import React from "react";
import { useFormik } from "formik";
import "../App.css";

function ExpenseForm({ onAddExpense }) {
  const formik = useFormik({
    initialValues: {
      description: "",
      category: "",
      date: "",
    },
    onSubmit: (values, { resetForm }) => {
      if (!values.description || !values.category || !values.date) return;
      onAddExpense({
        id: Date.now(),
        description: values.description,
        category: values.category,
        date: values.date,
      });
      resetForm();
    },
  });

  return (
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
        type="text"
        name="date"
        placeholder="MM/DD/YYYY"
        value={formik.values.date}
        onChange={formik.handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default ExpenseForm;
