import'./newExpense.css'
import ExpenseForm from './expenseForm.js'

const NewExpense=({onAddExpenseHandler})=>{
   // onAddExpenseHandler();
    return (
        <div className='new-expense'>
            <ExpenseForm onSumbitForm={onAddExpenseHandler}></ExpenseForm>
        </div>
       
    )
}

export default NewExpense