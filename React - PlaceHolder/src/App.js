import Expenses from "./components/Expenses/expense.js";
import NewExpense from "./components/NewExpense/newExpense.js";
import { useState } from "react";

function App() {
  const expenses = [
    {
      id: 1,
      title: "Car Insurance",
      amount: 250,
      date: new Date(2023, 4, 5),
      location: "India",
    },
    {
      id: 2,
      title: "Bike EMI",
      amount: 400,
      date: new Date(2023, 4, 5),
      location: "India",
    },
    {
      id: 3,
      title: "Rent",
      amount: 800,
      date: new Date(2023, 4, 5),
      location: "India",
    },
    {
      id: 4,
      title: "Shopping",
      amount: 840,
      date: new Date(2023, 4, 5),
      location: "India",
    },
  ];

  const [data, setData] = useState(expenses);

  const onAddExpenseHandler = (newExpenses) => {
    console.log(newExpenses);
    setData((predata) => {
      return [...predata, newExpenses];
    });
    // console.log(newExpenses)
  };

  const onDeleteExpense = (deleteId) => {
    const newData = data.filter((expense) => expense.id !== deleteId);
    setData(newData);
  };

  return (
    <div>
      <NewExpense onAddExpenseHandler={onAddExpenseHandler} />
      <Expenses items={data} onDeleteExpense={onDeleteExpense}></Expenses>
    </div>
  );
}

export default App;
