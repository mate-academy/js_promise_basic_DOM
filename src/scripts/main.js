'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const notifAppender = (result) => {
  let clas;
  let text;

  if (result === 'success') {
    clas = 'message';
    text = 'Promise was resolved!';
  } else {
    clas = 'error-message';
    text = 'Promise was rejected!';
  }

  const notification = `
    <div class=${clas}>
      ${text}
    </div>
  `;

  body.insertAdjacentHTML('afterbegin', notification);
};

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('success');
  });
});

const promise2 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    reject(new Error('error'));
  });
});

promise1
  .then(result => notifAppender(result))
  .catch(result => notifAppender(result));

promise2
  .then(result => notifAppender(result))
  .catch(result => setTimeout(() => notifAppender(result), 3000));
