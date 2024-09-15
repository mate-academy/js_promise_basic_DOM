'use strict';

// write your code here

const logo = document.querySelector('.logo');

const message = document.createElement('div');

message.classList.add('message');
message.innerText = 'Promise was resolved!';

const error = document.createElement('div');

error.classList.add('message', 'error-message');
error.innerText = 'Promise was rejected!';

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', (e) => {
    if (e.target === logo) {
      resolve(message);
    } else {
      reject(error);
    }
  });
});

promise1
  .then((element) => {
    document.body.appendChild(element);
  })
  .catch((element) => {
    document.body.appendChild(element);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(error);
  }, 3000);
});

promise2
  .then((element) => {
    document.body.appendChild(element);
  })
  .catch((element) => {
    document.body.appendChild(element);
  });
