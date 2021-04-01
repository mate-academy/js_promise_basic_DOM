'use strict';

const logo = document.querySelector('.logo');

function createMessage(result, text, error) {
  const message = document.createElement('span');

  message.className = result;
  message.innerText = text;

  document.body.append(message);

  if (error) {
    setTimeout(() => {
      message.remove();
    }, 1000);
  }
}

const cancel = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

const complete = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

complete.then(() => {
  createMessage('message', 'Promise was resolved!');
});

cancel.catch(() => {
  createMessage('error-message', 'Promise was rejected!', 'error');
});
