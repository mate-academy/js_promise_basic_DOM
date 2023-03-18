'use strict';

const logo = document.getElementById('logo');

function createMessageBox(order) {
  const messageBox = document.createElement('div');

  document.body.appendChild(messageBox);
  messageBox.textContent = `${order}`;

  messageBox.className += 'error-message';

  order.split(' ').includes('resolved!')
    ? messageBox.className = 'message'
    : messageBox.className = 'error-message';
}

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
    reject(new Error('Promise was rejected!'));
  });
});

promise1.then((message) => {
  createMessageBox(message);
})
  .catch((message) => {
    createMessageBox(message);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.then((message) => {
  createMessageBox(message);
})
  .catch((message) => {
    createMessageBox(message);
  });
