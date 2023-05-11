import ExpenseItems from "./expenseItems"
import './expenseList.css'


const ExpensesList = ({expenseList,onData})=>{
   
    let expresion;
    let message;
    if (expenseList.length === 0){
       expresion=<p className="message">No expenses Found</p>
    }
    if (expenseList.length===1){
        message=<p className="message">Only single Expense here. Please add more...</p>
    }
    
    if (expenseList.length > 0){
        expresion =<div>{expenseList.map((expense)=>
            <ExpenseItems key={expense.id} {...expense} onData={onData}></ExpenseItems>
        )} </div>
    }
    return(
        <div>
            {expresion}
            {message}
        </div>
        
    )

}

export default ExpensesList