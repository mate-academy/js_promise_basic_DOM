'use strict';

// write your code here
const body = document.querySelector('body');
const logo = body.querySelector('.logo');

const message = (type = '') => {
  let text;

  if (type === 'success') {
    text = '<div class="message">Promise was resolved!</div>';
  } else {
    text = '<div class="message error-message">Promise was rejected!</div>';
  }

  body.insertAdjacentHTML('beforeEnd', text);
};

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('success');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('error'));
  }, 3000);
});

promise1.then(message).catch(message);
promise2.then(message).catch(message);
