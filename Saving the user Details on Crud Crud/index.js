const submit = document.querySelector('#my-form');
let n = document.getElementById('name')
let Em = document.getElementById('email')


submit.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    let myobj = {
        name: name,
        email: email
    }

    axios.post('https://crudcrud.com/api/c125a6d0b52e4031ba3c4b299fcf1f3a/booking',
        {
            "name": name,
            "email": email
        })
        .then((res => console.log(res)))
        .catch((err) => console.log(err))

    addUser(name, email);
    e.target.name.value = "";
    e.target.email.value = "";
})


const user = document.getElementById('users');

function addUser(name, email) {

    const li = document.createElement('li');
    li.className = 'user'

    const userText = document.createTextNode(name + " - " + email + "    ");

    li.appendChild(userText);
    const deleteU = document.createElement('button');
    deleteU.appendChild(document.createTextNode('Delete'));
    deleteU.className = 'Delete';
    li.appendChild(deleteU);
    const Edit = document.createElement('button');
    Edit.appendChild(document.createTextNode('Edit'));
    Edit.className = 'Edit';
    li.appendChild(Edit);
    user.appendChild(li)

}


user.addEventListener('click', (e) => {
    e.preventDefault();
    let li = e.target.parentElement;
    let Name = li.textContent.split(" ");

    let data = axios.get('https://crudcrud.com/api/c125a6d0b52e4031ba3c4b299fcf1f3a/booking')
        .then((data => {
            data = data.data;
            const deleteUser = data.filter((val) => val.name == Name[0])
            return deleteUser
        }))
        .then((deleteUser)=>deleteUserid(deleteUser[0]._id))
        .catch((err) => console.log(err))


    if (e.target.classList.contains('Delete')) {
        deleteUser(e);
    }
    else if (e.target.classList.contains('Edit')) {
        n.value = Name[0];
        Em.value = Name[2];
        deleteUser(e);
    }

})

function deleteUser(e) {
    let li = e.target.parentElement;
    user.removeChild(li);

}

function deleteUserid(id) {
    axios.delete(`https://crudcrud.com/api/c125a6d0b52e4031ba3c4b299fcf1f3a/booking/${id}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
}
