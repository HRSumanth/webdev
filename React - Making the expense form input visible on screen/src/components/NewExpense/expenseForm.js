import "./expenseForm.css";
import { useState } from "react";

const ExpenseForm = ({ onSumbitForm }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateHandler = (event) => {
    setEnteredDate(new Date(event.target.value));
  };

  const submitted = (event) => {
    event.preventDefault();

    const updateExpense = {
      id: Math.random(),
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
      location: "india",
    };

    event.target.title.value = "";
    event.target.amount.value = "";
    event.target.date.value = "";
    onSumbitForm(updateExpense);
  };

  return (
    <form onSubmit={submitted}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="new-expense__control label">Title</label>
          <input
            className="new-expense__control input"
            name="title"
            type="text"
            onChange={titleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__control label">Amount</label>
          <input
            className="new-expense__control input"
            name="amount"
            type="number"
            min="1"
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__control label">Date</label>
          <input
            className="new-expense__control input"
            name="date"
            type="date"
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
