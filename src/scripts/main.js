'use strict';

const logo = document.querySelector('.logo');

function printMessage(classMessage, text, error) {
  const message = document.createElement('div');

  if (error) {
    setTimeout(() => {
      message.remove();
    }, 3000);
  }

  message.className = classMessage;
  message.innerText = text;
  document.body.append(message);
}

const resolvePromise = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const rejectPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

resolvePromise.then(() => {
  printMessage('message', 'Promise was resolved!');
});

rejectPromise.catch(() => {
  printMessage('error-message', 'Promise was rejected!', 'error');
});
