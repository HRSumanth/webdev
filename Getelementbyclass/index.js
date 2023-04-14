console.log(document);
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
}
