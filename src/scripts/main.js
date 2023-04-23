'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error);
  }, 3000);
});

const successHandler = () => {
  messageHandler('message', 'resolved');
};
const errorHandler = () => {
  messageHandler('error-message', 'rejected');
};

function messageHandler(classText, messageText) {
  body.insertAdjacentHTML('beforeend', `
    <div class="${classText}">
      Promise was ${messageText}!
    </div>
  `);
}

promise1
  .then(successHandler)
  .catch(errorHandler);

promise2
  .then(successHandler)
  .catch(errorHandler);
