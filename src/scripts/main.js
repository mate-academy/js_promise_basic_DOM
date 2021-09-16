'use strict';

// write your code here
const logo = document.querySelector('.logo');

new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
}).then(text => addElem(text, 'message'));

new Promise((resolve, reject) => {
  setTimeout(reject, 3000, 'Promise was rejected!');
}).catch(text => addElem(text, 'error-message'));

function addElem(massage, classMassage) {
  const div = document.createElement('div');

  div.innerHTML = massage;
  document.body.append(div);
  div.classList.add('message');
  div.classList.add(`${classMassage}`);
};
