'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', function() {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise was rejected');
  }, 3000);
});

promise1.then(messageHandler).catch(errHandler);
promise2.then(messageHandler).catch(errHandler);

function messageHandler(message) {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = message;
  document.body.appendChild(div);
}

function errHandler() {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = err;
  document.body.appendChild(div);
}
