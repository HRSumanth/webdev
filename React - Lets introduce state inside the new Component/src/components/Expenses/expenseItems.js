import "./expenseitem.css";
import ExpenseDate from "./expenseDate.js";
import ExpenseDeatils from "./expenseDetails";
import Card from "../UI/card.js";

const ExpenseItems = ({ id, title, amount, date, location, onData }) => {
  const clickHandaler = (deleteId) => {
    console.log(deleteId);
    onData(deleteId);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <ExpenseDeatils title={title} amount={amount} location={location} />
      <button
        className="expense-item__amount"
        onClick={() => clickHandaler(id)}
      >
        Delete
      </button>
    </Card>
  );
};

export default ExpenseItems;
