const submit = document.querySelector('#my-form');


submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    
   let myobj = JSON.stringify({
        name:name,
        email:email
         })

    

    localStorage.setItem('myobj',myobj);
    //localStorage.setItem('email',email);
    e.target.name.value= "";
    e.target.email.value="";


})
