import ExpenseItems from "./components/expenseItems";

function App() {
  const expense = [
    {
      id: 1,
      title: "Car Insurence",
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

  return (
    <div>
      {expense.map((element) => (
        <ExpenseItems
          title={element.title}
          amount={element.amount}
          date={element.date}
          location={element.location}
        ></ExpenseItems>
      ))}
    </div>
  );
}

export default App;
