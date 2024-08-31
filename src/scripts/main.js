'use strict';

// write your code here

function appendMessage(text, className = 'message') {
  const div = document.createElement('div');

  div.className = className;
  div.textContent = text;
  document.body.appendChild(div);
}

const myPromise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  if (logo) {
    logo.addEventListener('click', () => {
      resolve('Promise was resolved!');
    });
  } else {
    reject(new Error('Logo element not found!'));
  }
});

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

myPromise1
  .then((message) => {
    appendMessage(message);
  })
  .catch((error) => {
    appendMessage(error.message, 'message error-message');
  });

myPromise2
  .then((message) => {
    appendMessage(message);
  })
  .catch((error) => {
    appendMessage(error.message, 'message error-message');
  });
