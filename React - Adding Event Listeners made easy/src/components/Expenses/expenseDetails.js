import "./expenseDetails.css";

function ExpenseDeatils({ title, location, amount }) {
  return (
    <div className="expense-items">
      <div className="expense-item__descriptions">
        <h2>{title}</h2>
        <h2>{location}</h2>
      </div>
      <div className="expense-item__prices">{amount}</div>
    </div>
  );
}

export default ExpenseDeatils;
