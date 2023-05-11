import ExpenseItems from "./expenseItems"


const ExpensesList = ({expenseList,onData})=>{
    return(
        <div>
            {expenseList.map((expense)=>
                <ExpenseItems key={expense.id} {...expense} onData={onData}></ExpenseItems>
            )}
        
        </div>
        
    )

}

export default ExpensesList