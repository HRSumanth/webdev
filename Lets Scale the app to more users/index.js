const submit = document.querySelector('#my-form');
let data=[];


submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    
   let myobj = {
        name:name,
        email:email
         }

    data.push(JSON.parse(localStorage.getItem('myobj')));
    console.log(data)
    data.push(myobj);
    localStorage.setItem('myobj',JSON.stringify(data));
    const user= document.getElementById('users');

    user.innerHTML=`${name} "-" ${email}`
    e.target.name.value= "";
    e.target.email.value="";


})
