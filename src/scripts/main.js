'use strict';

const button = document.querySelector('#logo');
const addNode = (value, type) => {
  const div = document.createElement('div');

  div.classList.add('message');

  if (type === 'error') {
    div.classList.add('error-message');
  }

  div.innerText = value;

  document.body.appendChild(div);
};

const buttonHandler = (resolve, reject) => {
  button.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
};

const timeHandler = (resolve, reject) => {
  setTimeout(() => {
    reject('Promise was rejected!');
  }, 3000);
};

const promise1 = new Promise(buttonHandler);

const promise2 = new Promise(timeHandler);

promise1
  .then((value) => {
    addNode(value);
  })
  .catch((value) => {
    addNode(value, 'error');
  });

promise2
  .then((value) => {
    addNode(value);
  })
  .catch((value) => {
    addNode(value, 'error');
  });
