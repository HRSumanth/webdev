// traversing the DOM 

const itemlist = document.querySelector('#items');

//parentNode

/*console.log (itemlist.parentNode);
itemlist.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemlist.parentElement.parentElement.parentElement);*/

//childNode

//console.log(itemlist.childNodes);

console.log(itemlist.children);
console.log(itemlist.children[1]);
itemlist.children[1].style.backgroundColor = 'yellow';

//firstchild

console.log(itemlist.firstChild);

//firstElementChild

console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent= 'Hello 1'

//lastchild

console.log(itemlist.lastChild);

//lastElementChild

console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent= 'Hello 4';

//nextSibling

console.log(itemlist.nextSibling);

//nextElementSibling

console.log(itemlist.nextElementSibling);

//previousSibling

console.log(itemlist.previousSibling);

//previousElementSibling

console.log(itemlist.previousElementSibling);

//CreateElement

const newDiv = document.createElement('div');

newDiv.className='hello';

newDiv.id='hello1';

newDiv.setAttribute('title','Hello Div');

var newdivText = document.createTextNode('Hello World')

newDiv.appendChild(newdivText);
console.log(newDiv);

const container = document.querySelector('header .container');
const h1= document.querySelector('header h1');


container.insertBefore(newDiv,h1);

const item1 = document.querySelector('.container .list-group');

item1.insertBefore(newDiv,itemlist.firstElementChild);



