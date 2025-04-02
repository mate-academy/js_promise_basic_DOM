'use strict';

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function messageAppend(messageText, error = false) {
  const message = document.createElement('div');

  message.className = 'message' + (error ? ' error-message' : '');

  message.innerText = messageText;
  document.querySelector('body').append(message);
}

promise1
  .then((message) => {
    messageAppend(message);
  })
  .catch((error) => {
    messageAppend(error.message, true);
  });

promise2
  .then((message) => {
    messageAppend(message);
  })
  .catch((error) => {
    messageAppend(error.message, true);
  });
