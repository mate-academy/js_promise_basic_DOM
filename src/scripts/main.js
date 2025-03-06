'use strict';

const icon = document.querySelector('.logo');

const promise1 = new Promise(
  (resolve) => {
    icon.addEventListener('click', () => resolve('Promise was resolved!'));
  },
  { once: true },
);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

function addNotification(message, isError = false) {
  const div = document.createElement('div');

  div.className = 'message';

  if (isError) {
    div.classList.add('error-message');
  }

  div.textContent = message;
  document.body.append(div);
}

promise1.then((message) => addNotification(message));
promise2.catch((errorMessage) => addNotification(errorMessage.message, true));
