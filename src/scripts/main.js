'use strict';

const logo = document.getElementsByClassName('logo')[0];

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

const resultFunction = (message, type) => {
  const newDiv = document.createElement('div');

  document.body.appendChild(newDiv);
  newDiv.setAttribute('class', message);
  newDiv.appendChild(document.createTextNode(type));
};

promise1.then(
  result => resultFunction('message', result)
);

promise2.catch(
  error => resultFunction('message error-message', error)
);
