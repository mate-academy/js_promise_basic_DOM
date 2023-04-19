'use strict';

const logo = document.querySelector('.logo');

function createMessage(message, messageClass) {
  let newMess = message;

  if (messageClass === 'message error-message') {
    newMess = 'Promise was rejected!';
  };

  document.body.insertAdjacentHTML('beforeend', `
    <div class="${messageClass}">
      ${newMess}
    </div>
  `);
}

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then(success => createMessage(success, 'message'))
  .catch(err => createMessage(err, 'message error-message'));

promise2
  .then(success => createMessage(success, 'message'))
  .catch(err => createMessage(err, 'message error-message'));
