import "./expenseDetails.css";
import { useState } from "react";

function ExpenseDeatils({ title, location, amount }) {
  const [changeAmount, setAmount] = useState(amount);

  const changeAmountHandle = () => {
    setAmount(100);
  };

  return (
    <div className="expense-items">
      <div className="expense-item__descriptions">
        <h2>{title}</h2>
        <h2>{location}</h2>
      </div>
      <div className="expense-item__prices">${changeAmount}</div>
      <button className="expense-item__amount" onClick={changeAmountHandle}>
        Change Amount
      </button>
    </div>
  );
}

export default ExpenseDeatils;
