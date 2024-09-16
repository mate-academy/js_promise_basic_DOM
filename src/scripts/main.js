'use strict';

const logo = document.querySelector('.logo');
const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function appendMessage(data, hasError) {
  const div = document.createElement('div');

  div.classList.add('message');

  if (hasError) {
    div.classList.add('error-message');
  }
  div.innerText = data;
  document.body.append(div);
}

promise1.then((message) => appendMessage(message));
promise2.catch((errorMessage) => appendMessage(errorMessage, true));
