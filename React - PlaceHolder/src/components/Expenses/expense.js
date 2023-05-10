import ExpenseItems from "./expenseItems";
import './expense.css'
import Card from "../UI/card.js";

function Expenses({items, onDeleteExpense}) {
  

  return (
    <Card className="items">
      {items.map((element) => (
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
