/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with 
  a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function menuCreator(items) {
  const menu = document.createElement('div');
  const unorgList = document.createElement('ul');
  items.forEach(el => {
    var li = document.createElement('li');
    li.textContent = el;
    unorgList.appendChild(li);
  });

  menu.appendChild(unorgList);

  menu.classList.add('menu');

  return menu;
};

const menuButton = document.querySelector('.menu-button');
const menu = menuCreator(menuItems);
const header = document.querySelector('.header');
header.appendChild(menu);

menuButton.addEventListener('click', event => {
  menu.classList.toggle('menu--open');
});

const lambda = document.querySelector('h1');
window.addEventListener('scroll', () => {
  gsap.to(lambda, {
    duration: 1,
    x: 200,
    ease: "elastic(1, 0.75)",
    yoyo:true,
    repeat: 1
  });
});