import "./expenseitem.css";

const ExpenseItems = ({ title, amount, date, location }) => {
  return (
    <div className="expense-item">
      <div>{date.toString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <h2>{location}</h2>
      </div>
      <div className="expense-item__price">{amount}</div>
    </div>
  );
};

export default ExpenseItems;
