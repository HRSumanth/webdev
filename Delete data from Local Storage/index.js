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
    if (localStorage.getItem('myobj')){
        data=(JSON.parse(localStorage.getItem('myobj')));
    }
    data.push(myobj);
    localStorage.setItem('myobj',JSON.stringify(data));
    

   // user.innerHTML=`${name} "-" ${email}`;
    addUser(name, email);
    e.target.name.value= "";
    e.target.email.value="";
})


const user= document.getElementById('users');

function addUser(name,email){
    
    const li= document.createElement('li');
    li.className='user'

    const userText=document.createTextNode(name +" - "+ email +"    ");
    
    li.appendChild(userText);
    const deleteU = document.createElement('button');
    deleteU.appendChild(document.createTextNode('Delete'));
    deleteU.className='Delete';
    li.appendChild(deleteU);
   // console.log(li);
    user.appendChild(li)

}


user.addEventListener('click', (e)=>{
    e.preventDefault();
    let li = e.target.parentElement;
    let Name=li.textContent.split(" "); 
    console.log(Name);
    data=(JSON.parse(localStorage.getItem('myobj')));
    data= data.filter( (v)=> v.name != Name[0])
    localStorage.setItem('myobj',JSON.stringify(data));
     if (e.target.classList.contains('Delete')){
            
            user.removeChild(li);
            
    }
        
})