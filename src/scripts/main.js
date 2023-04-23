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
  messageHandler('resolved');
};
const errorHandler = () => {
  messageHandler('rejected');
};

function messageHandler(text) {
  if (document.querySelector('.message')) {
    document.querySelector('.message').remove();
  }

  body.insertAdjacentHTML('beforeend', `
    <div class="message">
      Promise was ${text}!
    </div>
  `);
}

promise1
  .then(successHandler)
  .catch(errorHandler);

promise2
  .then(successHandler)
  .catch(errorHandler);
