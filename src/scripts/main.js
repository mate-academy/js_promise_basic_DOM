'use strict';

const RESOLVE_MSG = 'Promise was resolved!';
const REJECT_MSG = 'Promise was rejected!';
const ERR_CLASS = 'error-message';

const logo = document.querySelector('.logo');

//

function addNotification(message, err = false) {
  const element = document.createElement('div');

  element.classList.add('message', err && ERR_CLASS);
  element.textContent = message;

  document.body.append(element);
}

const promise1 = new Promise((resolve) => {
  logo.addEventListener(
    'click',
    () => {
      resolve(RESOLVE_MSG);
    },
    { once: true },
  );
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error(REJECT_MSG)), 3000);
});

promise1.then((message) => addNotification(message));
promise2.catch((error) => addNotification(error.message, true));
