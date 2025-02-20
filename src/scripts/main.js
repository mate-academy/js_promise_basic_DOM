'use strict';

let promise1;
let promise2;

function createAndHandlePromises() {
  promise1 = new Promise((resolve) => {
    const logo = document.querySelector('.logo');

    if (!logo) {
      appendErrorMessage(
        "Error: '.logo' element not found.  Functionality impaired.",
      );

      return;
    }
    logo.addEventListener('click', resolve);
  });

  promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise 2 rejected after 3 seconds'));
    }, 3000);
  });

  promise1.then(
    () => appendMessage('Promise 1 was resolved!'),
    (error) => appendErrorMessage('Promise 1 was rejected! ' + error.message),
  );

  promise2.then(
    () => appendMessage('Promise 2 was resolved!'),
    (error) => appendErrorMessage('Promise 2 was rejected! ' + error.message),
  );
}

function appendMessage(text) {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = text;
  document.body.appendChild(div);
}

function appendErrorMessage(text) {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = text;
  document.body.appendChild(div);
}

createAndHandlePromises();
