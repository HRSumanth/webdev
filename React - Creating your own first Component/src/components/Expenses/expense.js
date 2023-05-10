import React, { useState } from 'react';
import ExpenseItems from "./expenseItems";
import './expense.css'
import Card from "../UI/card.js";

function Expenses() {
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

 const onDeleteExpense = (deleteId) => {
    const newData = data.filter((expense) => expense.id !== deleteId);
    setData(newData);
  };

  return (
    <Card className="items">
      {data.map((element) => (
        <ExpenseItems
          key={element.id}
          id={element.id}
          title={element.title}
          amount={element.amount}
          date={element.date}
          location={element.location}
          onData={onDeleteExpense}
        />
      ))}
    </Card>
  );
}

export default Expenses;
