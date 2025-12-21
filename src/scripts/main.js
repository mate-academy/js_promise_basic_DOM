'use strict';

// write your code here
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  const data = ['Promise was resolved!', 'message'];

  logo.addEventListener('click', () => {
    if (data.length === 2) {
      resolve(data);
    }
  });
});

promise1
  .then((data) => {
    addBlock(data[0], data[1]);
  })
  .catch((message) => {
    return message;
  });

const promise2 = new Promise((resolve, reject) => {
  const data = ['Promise was rejected!', 'message', 'error-message'];

  if (data) {
    setTimeout(() => reject(data), 3000);
  }
});

promise2
  .then(() => {
    return null;
  })
  .catch((data) => {
    addBlock(data[0], data[1], data[2]);
  });

function addBlock(text, ...classes) {
  const block = document.createElement('div');

  block.classList.add(...classes);
  block.textContent = text;
  document.body.insertAdjacentElement('afterbegin', block);
}
