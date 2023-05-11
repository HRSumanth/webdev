import'./newExpense.css'
import ExpenseForm from './expenseForm.js'
import { useState } from 'react';

const NewExpense=({onAddExpenseHandler})=>{
   
   const [formVisible,setFormVisible]=useState(false)

   const newExpenseHandler=()=>{
    setFormVisible(formVisible===true ? false :true)
   }
      
    return (
        <div className='new-expense'>
            {formVisible===false &&<button onClick={newExpenseHandler}>Add New Expense</button> }
            { formVisible===true && <ExpenseForm onSumbitForm={onAddExpenseHandler} onNewExpenseHandler={newExpenseHandler} ></ExpenseForm>}
            
        </div>
       
    )
}

export default NewExpense