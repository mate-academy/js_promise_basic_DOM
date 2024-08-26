'use strict';

// const logo = document.querySelector('.logo');

// const createMessage = (isResolved) => {
//   const message = document.createElement('div');

//   message.classList.add('message', isResolved ? '' : 'error-message');

//   message.textContent = isResolved
//     ? 'Promise was resolved!'
//     : 'Promise was rejected!';

//   document.body.appendChild(message);
// };

// const promise1 = new Promise((resolve, reject) =>
//   logo ? logo.addEventListener('click', resolve) : reject(new Error()),
// );

// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(() => reject(new Error()), 3000),
// );

// promise1.then(() => createMessage(true));
// promise2.catch(() => createMessage(false));

const logo = document.querySelector('.logo');

const createMessage = (isResolved) => {
  const message = document.createElement('div');

  message.classList.add('message', !isResolved && 'error-message');

  message.textContent = isResolved
    ? 'Promise was resolved!'
    : 'Promise was rejected!';

  document.body.appendChild(message);
};

const promise1 = new Promise((resolve, reject) => {
  if (logo) {
    logo.addEventListener('click', resolve);
  } else {
    reject(new Error());
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise1.then(() => createMessage(true));
promise2.catch(() => createMessage(false));
