'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    setTimeout(() => {
      reject(Error);
    }, 3000);
  });
});

function createAndAppendElement(fullClassName, message) {
  const div = document.createElement('div');

  div.className = fullClassName;
  div.innerText = message;

  document.body.append(div);
};

promise1
  .then(() => {
    createAndAppendElement('message', 'Promise was resolved!')
  });

promise2
  .catch(() => {
    createAndAppendElement('message error-message', 'Promise was rejected!');
  });
