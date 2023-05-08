import "./expenseitem.css";
import ExpenseDate from "./expenseDate.js";
import ExpenseDeatils from "./expenseDetails";

const ExpenseItems = ({ title, amount, date, location }) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={date}></ExpenseDate>
      
       <ExpenseDeatils title={title} amount={amount} location={location}></ExpenseDeatils>
       
    </div>
  );
};

export default ExpenseItems;
