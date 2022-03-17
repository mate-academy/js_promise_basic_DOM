'use strict';

// write your code here

const body = document.querySelector('body');
const elemDiv = document.createElement('div');

const promise1 = new Promise((resolve) => {
  const logo = document.getElementsByClassName('logo')[0];

  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => {
  elemDiv.innerText = 'Promise was resolved!';
  elemDiv.classList.add('message');
  body.append(elemDiv);

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error());
    }, 3000);
  });

  promise2.catch(() => {
    elemDiv.classList.add('error-message');
    elemDiv.innerText = 'Promise was rejected!';
    body.append(elemDiv);
  });
});
