import "./expense.css";
import Card from "../UI/card.js";
import ExpenseFilter from "../Expensefilter/expenseFilter";
import { useState } from "react";
import ExpensesList from "./expenseList.js";
import ExpenseChart from "./expenseChart";

function Expenses({ items, onDeleteExpense }) {
  const [selectedYear, setSelectedYear] = useState("");

  const selectedYearExpenses = (year) => {
    setSelectedYear(year);
  };

  const newitems = filterexpenses(items, selectedYear);

  function filterexpenses(items, selectedYear) {
    if (selectedYear === "") {
      return items;
    } else {
      return items.filter((exp) => exp.date.getFullYear().toString() === selectedYear);
    }
  }

  return (
    <Card className="items">
      <ExpenseFilter
        inityear={"2020"}
        onSelectedYear={selectedYearExpenses}
        selected={selectedYear}
      ></ExpenseFilter>
      <ExpenseChart chartData={newitems}></ExpenseChart>
      <ExpensesList
        expenseList={newitems}
        onData={onDeleteExpense}
      ></ExpensesList>
    </Card>
  );
}

export default Expenses;
