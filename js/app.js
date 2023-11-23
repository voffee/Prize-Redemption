
// DOM Manipulation

// /** @type {HTMLDivElement} */
// const listItems = document.querySelectorAll('.list-items');

// console.log(listItems);

// for ( i=0; i<listItems.length; i++) {
    
//     listItems[i].style.fontSize = '16px';
// }

// Creating Elements

// /** @type {HTMLDivElement} */
// const ul = document.querySelector('ul');

// /** @type {HTMLDivElement} */
// const licreation = document.createElement('li');

// Adding elements

// ul.append(licreation);

// Modifying the text 

// /** @type {HTMLDivElement} */
// const firstListItem = document.querySelector('.list-items');

// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);

// // Don't use innerHTML because it exposes to user how the program is structured.
// console.log(firstListItem.innerHTML);

// licreation.innerText = 'Ticket'

// Modifying Attributes & Classes

// licreation.setAttribute('class', 'main-heading');
// licreation.removeAttribute('class');

// const title = document.querySelector('.main-heading');

// console.log(title.getAttribute('class'));

// licreation.classList.add('example');
// licreation.classList.remove('example');

// Finding if element contains a certain class
// console.log(licreation.classList.contains('list-items'));

// Remove element

// licreation.remove();

// DOM TRAVERSAL

// Parent Node Traversal

/** @type {HTMLDivElement} */
let ul = document.querySelector('ul');

// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;

// console.log(html.parentNode);
// console.log(html.parentElement);

// Child Node Traversal

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = 'yellow';

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// Sibling Node Traversal

const div = document.querySelector('div');

console.log(div.childNodes);

console.log(ul.previousElementSibling);
console.log(ul.nextSibling);