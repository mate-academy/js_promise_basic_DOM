'use strict';

// write your code here
const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise(
  (resolve) => logo.addEventListener('click', resolve)
);

promise1.then(
  () =>  printNotification('message', 'Promise was resolved!')
);

const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 2000));

promise2.catch(
  () => printNotification('error-message', 'Promise was rejected!')
);

function printNotification(className, text) {
  const message = document.createElement('div');

  message.innerText = text;
  message.classList.add(className);
  body.append(message);
}
