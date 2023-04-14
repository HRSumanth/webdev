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
