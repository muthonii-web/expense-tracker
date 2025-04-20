import React, { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.amount) {
      onAddExpense({ ...formData, id: Date.now() });
      setFormData({
        name: "",
        description: "",
        category: "",
        amount: "",
        date: "",
      });
    }
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h3>Add Expense</h3>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter expense name"
      />
      <input
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Enter expense description"
      />
      <input
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Enter category"
      />
      <input
        name="amount"
        type="number"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Enter amount"
      />
      <input
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ExpenseForm;
