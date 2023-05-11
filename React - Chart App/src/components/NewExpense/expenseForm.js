import "./expenseForm.css";
import { useState } from "react";

const ExpenseForm = ({ onSumbitForm,onNewExpenseHandler }) => {
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

   if (event.nativeEvent.submitter.id ==='submitbutton'){
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
    }
    if (event.nativeEvent.submitter.id==='cancelbutton'){
      onNewExpenseHandler()
    }
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
            placeholder="Enter Title"
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
            placeholder="Enter Amount"
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__control label">Date</label>
          <input
            className="new-expense__control input"
            name="date"
            type="date"
            onChange={dateHandler}
            placeholder="Select Date"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" id="cancelbutton">Cancel</button>
        <button type="submit" id="submitbutton">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
