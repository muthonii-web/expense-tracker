import React from "react";

function ExpenseTable({ expenses, onDelete, onSort }) {
  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th onClick={() => onSort("name")}>Expense</th>
          <th onClick={() => onSort("description")}>Description</th>
          <th onClick={() => onSort("category")}>Category</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((exp) => (
          <tr key={exp.id}>
            <td>{exp.name}</td>
            <td>{exp.description}</td>
            <td>{exp.category}</td>
            <td>{exp.amount}</td>
            <td>{exp.date}</td>
            <td>
              <button className="delete-btn" onClick={() => onDelete(exp.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
