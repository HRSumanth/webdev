const submit = document.querySelector('#my-form');
let amount = document.getElementById('amount')
let discription = document.getElementById('dish')
let Category = document.getElementById('Category')

axios.get('https://crudcrud.com/api/6ef985a2e12b4c5d842f379523ced092/Orders')
    .then((data => {
        data = data.data;
        data.map((val) => addOrder(val.amount, val.dish, val.Category))

    }))
    .catch((err) => console.log(err))


submit.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target)
    const amountIn = e.target.amount.value;
    const dishIn = e.target.dish.value;
    const CategoryIn = e.target.Category.value;
    let myobj = {
        amount: amountIn,
        dish: dishIn,
        Category: CategoryIn
    }
    axios.post('https://crudcrud.com/api/6ef985a2e12b4c5d842f379523ced092/Orders',
        {
            amount: amountIn,
            dish: dishIn,
            Category: CategoryIn
        })
        .then((res => console.log(res)))
        .catch((err) => console.log(err))

    console.log(amountIn, dishIn, CategoryIn)
    addOrder(amountIn, dishIn, CategoryIn);
    e.target.amount.value = "";
    e.target.dish.value = "";
    e.target.Category.value = "";
})


const user = document.getElementById('orders');

function addOrder(amount, discription, Category) {
    const table = document.getElementById(Category);
    console.log(table)

    const li = document.createElement('li');
    li.className = Category

    const tableText = document.createTextNode(amount + " - " + discription + " - " + Category + "  ");

    li.appendChild(tableText);
    const deleteOrder = document.createElement('button');
    deleteOrder.appendChild(document.createTextNode('Delete-Order'));
    deleteOrder.className = 'Delete';
    li.appendChild(deleteOrder);
    table.appendChild(li)

}


user.addEventListener('click', (e) => {
    e.preventDefault();
    let li = e.target.parentElement;
    let Name = li.textContent.split(" ");
    console.log(Name, Name[4] + " " + Name[5]);
    axios.get('https://crudcrud.com/api/6ef985a2e12b4c5d842f379523ced092/Orders')
        .then((data => {
            data = data.data;
            const deleteUser = data.filter((val) => val.amount == Name[0] && val.dish == Name[2] && val.Category == (Name[4] + " " + Name[5]))
            return deleteUser
        }))
        .then((deleteUser) => deleteOrderId(deleteUser))
        .catch((err) => console.log(err))

    if (e.target.classList.contains('Delete')) {
        deleteUser(e, Name[4] + " " + Name[5]);
    }

})

function deleteUser(e, table) {
    const dtable = document.getElementById(table);
    let li = e.target.parentElement;
    dtable.removeChild(li);

}

function deleteOrderId(order) {

    console.log(order[0]._id)
    axios.delete(`https://crudcrud.com/api/6ef985a2e12b4c5d842f379523ced092/Orders/${order[0]._id}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
}
