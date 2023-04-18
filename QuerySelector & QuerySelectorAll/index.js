/*console.log(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.forms);
console.log(document.links);
console.log(document.images);

//GETELEMENTBYID

const headerTitle= document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent="hello";
headerTitle.innerHTML ='<h3>Hello<h3>';

//GETELEMENTBYCLASS

const items =document.getElementsByClassName('list-group-item');
items[1].textContent='Hello 2';
items[2].style.backgroundColor = 'green';

for (let i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold';
} */

//GETELEMENTBYTAGNAME

/*const li =document.getElementsByTagName('li');
li[1].textContent='Hello 2';
li[2].style.backgroundColor = 'green';

for (let i=0;i<li.length;i++){
    li[i].style.fontWeight = 'bold';
}*/

// QuerySelector

const header = document.querySelector('#main-header');
header.style.borderButtom = 'solid 4px #ccc';

const input = document.querySelector('input');
input.value= 'Hello world';

const inputbtn= document.querySelector('input[type="submit"]');
inputbtn.value= 'SEND';

const item= document.querySelector('.list-group-item');
item.style.color= 'red';


const seconditem= document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor = 'green';


const thirditem= document.querySelector('.list-group-item:nth-child(3)');
thirditem.innerHTML= '';

//QuerySelectorAll

const title = document.querySelectorAll('.title');

title[0].textContent='Hello';

const secondli= document.querySelectorAll('li:nth-child(2)');
secondli[0].style.color= 'green';

const odd = document.querySelectorAll('li:nth-child(odd)');

for ( let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}










