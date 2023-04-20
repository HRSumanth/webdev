const submit = document.querySelector('.btn');
const name = document.querySelector('#name');
const email = document.querySelector('#email');

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    localStorage.setItem('name',name.value);
    localStorage.setItem('email',email.value)

})
