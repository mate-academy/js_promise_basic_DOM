'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

logo.addEventListener('click', handler);

const messageSuc = 'Promise was resolved!';
const messageErr = 'Promise was rejected!';

function first() {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = messageSuc;

  body.append(div);
}

function second() {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = messageErr;

  body.append(div);
}

function handler() {
  return new Promise((resolve, reject) => {
    resolve();
    first();
  });
}

const promErr = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject(new Error(messageErr));
  }, 3000);
}).catch(error => second(error));

function tasty() {
  return promErr;
}

tasty();
