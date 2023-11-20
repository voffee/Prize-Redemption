
// DOM Manipulation

/** @type {HTMLDivElement} */
// const listItems = document.querySelectorAll('.list-items');

// console.log(listItems);

// for ( i=0; i<listItems.length; i++) {
    
//     listItems[i].style.fontSize = '16px';
// }

// Creating Elements

/** @type {HTMLDivElement} */
const ul = document.querySelector('ul');

/** @type {HTMLDivElement} */
const licreation = document.createElement('li');

ul.append(licreation);

console.log();