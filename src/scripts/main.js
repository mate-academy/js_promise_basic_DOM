'use strict';

// write your code here

const promise1 = new Promise(executor);

function executor(resolve, reject) {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', (e) => {
    resolve('Promise was resolved!');
  });
}

promise1.then((data) => {
  const newDiv = document.createElement('div');

  newDiv.classList.add('message');
  newDiv.textContent = data;
  document.body.appendChild(newDiv);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, new Error('Promise was rejected!'));
});

promise2.catch((data) => {
  const newDiv = document.createElement('div');

  newDiv.classList.add('message');
  newDiv.classList.add('error-message');
  newDiv.textContent = data;
  document.body.appendChild(newDiv);
});
