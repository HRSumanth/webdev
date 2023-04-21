const submit = document.querySelector('#my-form');
let n=document.getElementById('name')
let Em=document.getElementById('email')
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
    const Edit = document.createElement('button');
    Edit.appendChild(document.createTextNode('Edit'));
    Edit.className='Edit';
    li.appendChild(Edit);
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
        deleteUser(e);
    }
    else if (e.target.classList.contains('Edit')){
        n.value=Name[0];
        Em.value=Name[2];
        deleteUser(e);
    }
        
})

function deleteUser (e) {
    let li = e.target.parentElement;    
    user.removeChild(li);

}