'use strict';

const logoButton = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve) => {
  logoButton.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

promise1.then(() => {
  addElement('message', 'resolved');
});

promise2.catch(() => {
  addElement('message error-message', 'rejected');
});

function addElement(classname, word) {
  const elem = document.createElement('div');

  elem.className = classname;
  elem.innerText = `Promise was ${word}!`;

  return body.append(elem);
}
