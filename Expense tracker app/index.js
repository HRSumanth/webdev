const submit = document.querySelector('#my-form');
let amount = document.getElementById('amount')
let discription = document.getElementById('discription')
let Category = document.getElementById('Category')

let data = [];


submit.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target)
    const amountIn = e.target.amount.value;
    const discriptionIn = e.target.discription.value;
    const CategoryIn = e.target.Category.value;
    let myobj = {
        amount: amountIn,
        discription: discriptionIn,
        Category: CategoryIn
    }
    if (localStorage.getItem('myobj')) {
        data = (JSON.parse(localStorage.getItem('myobj')));
    }
    data.push(myobj);
    localStorage.setItem('myobj', JSON.stringify(data));


    // user.innerHTML=`${name} "-" ${email}`;
    console.log(amountIn, discriptionIn, CategoryIn)
    addUser(amountIn, discriptionIn, CategoryIn);
    e.target.amount.value = "";
    e.target.discription.value = "";
    e.target.Category.value = "";
})


const user = document.getElementById('users');

function addUser(amount, discription, Category) {

    const li = document.createElement('li');
    li.className = 'user'

    const userText = document.createTextNode(amount + " - " + discription + " - " + Category + "  ");

    li.appendChild(userText);
    const deleteU = document.createElement('button');
    deleteU.appendChild(document.createTextNode('Delete'));
    deleteU.className = 'Delete';
    li.appendChild(deleteU);
    const Edit = document.createElement('button');
    Edit.appendChild(document.createTextNode('Edit'));
    Edit.className = 'Edit';
    li.appendChild(Edit);
    // console.log(li);
    user.appendChild(li)

}


user.addEventListener('click', (e) => {
    e.preventDefault();
    let li = e.target.parentElement;
    let Name = li.textContent.split(" ");
    console.log(Name);
    data = (JSON.parse(localStorage.getItem('myobj')));
    data = data.filter((v) => v.amount != Name[0])
    localStorage.setItem('myobj', JSON.stringify(data));

    if (e.target.classList.contains('Delete')) {
        deleteUser(e);
    }
    else if (e.target.classList.contains('Edit')) {
        amount.value = Name[0];
        discription.value = Name[2];
        Category.value = Name[4];
        deleteUser(e);
    }

})

function deleteUser(e) {
    let li = e.target.parentElement;
    user.removeChild(li);

}

