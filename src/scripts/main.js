'use strict';

const body = document.querySelector('body');

function createMessage(messageText, type) {
  const msg = document.createElement('div');

  msg.className = type;
  msg.textContent = messageText;
  body.append(msg);
}

document.querySelector('.logo').addEventListener('click', function () {
  const promise1 = new Promise((resolve) => {
    resolve();
  });

  promise1.then(() => {
    createMessage('Promise was resolved!', 'message');
  });
});

const promise2 = new Promise((resolve, reject) => {
  reject(new Error('Error'));
});

promise2.catch(() => {
  setTimeout(
    () => createMessage('Promise was rejected!', 'message error-message'),
    3000,
  );
});
