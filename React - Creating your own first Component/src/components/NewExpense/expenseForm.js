import "./expenseForm.css";

const ExpenseForm = () => {
  const submitted = (event) => {
    event.preventDefault();
    console.log(event.target.title.value);
    console.log(event.target.amount.value);
    console.log(event.target.date.value);
    event.target.title.value = "";
    event.target.amount.value = "";
    event.target.date.value = "";
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
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__control label">Amount</label>
          <input
            className="new-expense__control input"
            name="amount"
            type="number"
            min="1"
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__control label">Date</label>
          <input
            className="new-expense__control input"
            name="date"
            type="date"
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
